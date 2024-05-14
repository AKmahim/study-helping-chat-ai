import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Home = () => {
    const [fileName, setFileName] = useState("");

    const handleFile = async (e) => {
        console.log(e.target.files);
        setFileName(e.target.files[0].name);
    }

    const { data } = useQuery({
        queryKey: ["File"],
        queryFn: async () => {
            const res = await axios.get("localhost:3000/ask");
            return res.data;
        },
        refetchOnWindowFocus: false,
        retry: 2,
        enabled: fileName.length > 0
    })

    console.log(data);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mt-32 md:mt-60 mx-2 md:mx-0">
                <h1 className="text-xl md:text-6xl font-bold">Study Helping Chat AI</h1>
                <h5 className="text-sm md:text-xl font-medium mt-5 md:mt-10">Upload your PDF</h5>
            </div>
            <div className="flex justify-between items-center gap-2 mt-1.5 md:mt-3 mx-2 md:mx-0 p-3 md:p-5 border border-black rounded-md">
                <div className="flex items-center gap-2 md:gap-5">
                    <FaCloudUploadAlt size={30} />
                    <div>
                        <p className="text-xs md:text-base font-semibold truncate">Drag and drop file here</p>
                        <p className="text-[10px] md:text-xs">Limit 200MB per file.PDF</p>
                    </div>
                </div>
                <div className="flex items-center md:gap-2">
                    <p className="text-[8px] md:text-base truncate">{fileName}</p>
                    <label
                        htmlFor="fileInput"
                        className="text-xs md:text-base custom-file-input border border-dashed border-black rounded p-1 md:p-2 cursor-pointer hover:bg-slate-200">
                        Browse Files
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFile}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;