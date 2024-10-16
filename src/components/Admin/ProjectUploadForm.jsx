import React, { useState } from "react";
import { db, storage } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './ProjectUploadForm.css';
import NavBar from '../NavBar';
import Footer from '../Footer';


const ProjectUploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image!");
      return;
    }

    const storageRef = ref(storage, `projects/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveProjectData(downloadURL);
        });
      }
    );
  };

  const saveProjectData = async (imageUrl) => {
    try {
      await addDoc(collection(db, "projects"), {
        title,
        description,
        skills: skills.split(",").map(skill => skill.trim()),
        team: team.split(",").map(member => ({ name: member.trim() })),
        imageUrl
      });
      alert("Project uploaded successfully!");
      resetForm();
    } catch (error) {
      console.error("Error uploading project:", error);
      alert("Failed to upload project");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setSkills("");
    setTeam("");
    setImage(null);
    setProgress(0);
  };

  return (
    <>
      <NavBar />
    <div className="upload-form-container">
      <h2>Upload Explore Project</h2>
      <form onSubmit={handleUpload}>
        <label>Project Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Skills (comma-separated)</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />

        <label>Team Members (comma-separated)</label>
        <input
          type="text"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
        />

        <label>Project Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit">Upload Project</button>
      </form>

      {progress > 0 && (
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ProjectUploadForm;
