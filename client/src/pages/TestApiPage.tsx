import { useEffect, useState } from "react";
import apiClient from "../services/api/apiClient";

const TestApiPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    apiClient
      .get("/posts")   // 👈 اینجا تست می‌کنی
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Posts</h1>

      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestApiPage;