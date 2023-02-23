import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPosts from "../../components/forms/EditPosts";
import { useDispatch, useSelector } from "react-redux";

const EditPost = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <EditPosts id={id} />
    </div>
  );
};

export default EditPost;
