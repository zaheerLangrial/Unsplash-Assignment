import axios from "axios";
import { useState, useEffect } from "react";

const MyCollection = () => {
  const [likedPicture, setlikedPicture] = useState([]);

  type Todo = {
    url: string;
    width: number;
    height: number;
};
  useEffect(() => {
    handleLikePicturesData();
  },[]);

  const handleLikePicturesData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/pics");
      setlikedPicture(res.data);
    } catch (error) {
      console.log('This is error form json server : ' , error);
    }
  };
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <h2 className="text-2xl font-semibold mb-2">My Collection</h2>
      <div className="max-w-8xl mx-auto gallary">{likedPicture.map((item:Todo, index) => (
            <img key={index} src={item.url} className="hover:cursor-pointer w-full flex justify-center pb-2"/>
        ))}</div>
    </div>
  );
};

export default MyCollection;
