import React, { useState } from "react";
import styles from "./NotesHeading.module.css";

export default function NotesHeading({ arr, setArr, obj, setObj }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, obj]);
    setObj({ title: "", text: "" });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setObj({ ...obj, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className={styles.navBar}>
        <i class="fa-solid fa-bars"></i>
        <div className={styles.logo}>
          <img
            width="80"
            height="80"
            src="https://img.icons8.com/plasticine/80/task.png"
            alt="task"
          />
          <h3 className={styles.logoText}>Note</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            value={obj.title}
            className={styles.searchBar}
            placeholder="Enter a Title "
            onChange={handleChange}
          />
          <button className={styles.saveBtn}>save</button>
        </form>
      </div>
    </>
  );
}
