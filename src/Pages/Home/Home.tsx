import { useEffect, useState } from "react";
import Nav from "../../Components/NavBar/Nav";
import 'tailwindcss/tailwind.css';
import axios from "axios";
import ActionButton from "../../Components/ActionButton/ActionButton";

function Home() {
    const [data, setData] = useState([]);
    const [showOptions, setShowOptions] = useState<number | null>(null);
    const [likedPictures, setLikedPictures] = useState<Todo[]>([]);


    type Todo = {
        url: string;
        width: number;
        height: number;
    };

    useEffect(() => {
        handleApi();
    }, []);

    const handleApi = async () => {
        try {
            const res = await axios.get(
                "https://api.thecatapi.com/v1/images/search?limit=10"
            );
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDownload = (url: string): void => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "cat_image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDelete = (index: number): void => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    const handleLike = (index: number): void => {
        const likedPicture = data[index];
        addNewData(likedPicture)
        
        setLikedPictures([...likedPictures, likedPicture]);
    };
    const addNewData = async (data:any) => {
        try {
            const res =await axios.post('http://localhost:3000/pics' , data)
        } catch (error) {
            console.log(error)
        }
    }

    

    const handleDetails = (index: number): void => {
        console.log(index)
    };

    const handleAddNewCat = async () => {
        try {
            const inputFile = document.createElement("input");
        console.log(inputFile)
        inputFile.type = "file";
        inputFile.accept = "image/*"
        // console.log('')
        
        inputFile.onchange = async (e) => {
                        const file= e.target.files[0];
                        // console.log(file)
                        if (file) {
                            const imageUrl = URL.createObjectURL(file);
                            const newCat = {
                                url: imageUrl,
                                width: 300, // Set the width and height as needed
                                height: 250,
                            };
                            setData([...data, newCat]);
                        }
                    };
                    inputFile.click();
                    
        } catch (error) {
            console.log(error)
        }
    }

    const toggleOptions = (index: number | null): void => {
        setShowOptions(index);
    };

    return (
        <div className="w-full">
            <Nav/>
            
            <button
                onClick={handleAddNewCat}
                className="text-white text-xl bg-purple-800 px-4 py-2 mb-3 rounded-lg hover:bg-purple-600 transition-colors duration-300 mt-4 mx-auto block"
            >
                Add New Cat
            </button>
           
            <section className="max-w-8xl mx-auto gallary">
                {data.map((item: Todo, index) => (
                    <div key={index} className="relative">
                        <img
                            src={item.url}
                            alt="Cat picture"
                            className="hover:cursor-pointer w-full pb-2"
                            onClick={() => toggleOptions(index === showOptions ? null : index)}
                        />
                        {index === showOptions && (
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 transition-opacity duration-300 hover:opacity-90 flex items-center justify-center">
                                <ActionButton
                                    onClick={() => handleDownload(item.url)}
                                    variant = 'transition'
                                    child = 'Download'
                                />
                                <ActionButton
                                    onClick={() => handleDelete(index)}
                                    variant = 'red'
                                    child = 'Download'
                                />
                                <ActionButton
                                    onClick={() => handleLike(index)}
                                    variant = 'blue'
                                    child = 'Like'
                                />
                                <ActionButton
                                    onClick={() => handleDetails(index)}
                                    variant = 'green'
                                    child = 'Details'
                                />
                            </div>
                        )}
                    </div>
                ))}
            </section>
           
            
        </div>
    );
}

export default Home;
