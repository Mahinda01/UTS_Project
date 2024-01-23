const jwt = require("jsonwebtoken");
const pool = require("../database/database_connection");

//fungsi untuk manambah postingan
const createPost = async (req, res) => {
  try {
    const { token, content } = req.body;

    //untuk mengembalikan token menjadi data sebenarnya
    const decodedToken = jwt.verify(token, "your-secret-key");
    const userId = decodedToken.id;

    const [result] = await pool.execute(
      "INSERT INTO posts(user_id, content) VALUES (?, ?)",
      [userId, content]
    );
    console.log(userId, result);

    res.status(201).json({
      message: "Post created succsessfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//fungsi untuk mengambil data posts dari database
const getAllPosts = async (req, res) => {
  try {
    //query untuk menyatukan 3 table sekaligus
    //dan menghitung banyak likes per user
    const query = `SELECT 
    p.id as post_id, 
    p.created_at as created_at,
    p.content as post_content,
    COUNT(l.id) as like_count,
    GROUP_CONCAT(u.username) as likers,
    u_post.username as sender
  FROM 
    posts p
  LEFT JOIN 
    likes l ON p.id = l.post_id
  LEFT JOIN 
    users u ON l.user_id = u.id
  LEFT JOIN
    users u_post ON p.user_id = u_post.id
  GROUP BY 
    p.id, p.content, sender
  ORDER BY
    p.created_at DESC;
  
  `;

    let [posts] = await pool.execute(query);

    //untuk convert string menjadi array
    posts = posts.map((post) => {
      return {
        ...post,
        likers: post.likers ? post.likers.split(",") : [],
      };
    });

    res.status(200).json({
      message: "Get ALl post succsessfully",
      posts: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
