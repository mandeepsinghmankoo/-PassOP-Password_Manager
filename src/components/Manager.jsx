import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import writing from '../assets/writing.png';

const Manager = () => {
    const ref = useRef();
    const passRef = useRef();
    const [form, setForm] = useState({ site: '', username: '', password: '' });
    const [passArr, setPassArr] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPassArr(JSON.parse(passwords));
        }
    }, []);

    const showPass = () => {
        passRef.current.type = "text";
        if (ref.current.src === "https://img.icons8.com/nolan/64/visible.png") {
            ref.current.src = "https://img.icons8.com/nolan/64/hide.png";
            passRef.current.type = "password";
        } else {
            ref.current.src = "https://img.icons8.com/nolan/64/visible.png";
            passRef.current.type = "text";
        }
    };

    const savePass = () => {
        if (editIndex !== null) {
            const updatedPassArr = [...passArr];
            updatedPassArr[editIndex] = form;
            setPassArr(updatedPassArr);
            localStorage.setItem('passwords', JSON.stringify(updatedPassArr));
            setEditIndex(null);
            toast.success("Password Updated Successfully.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colorful",
            });
        } else {
            const updatedPassArr = [...passArr, form];
            setPassArr(updatedPassArr);
            localStorage.setItem('passwords', JSON.stringify(updatedPassArr));
            toast.success("Password Added Successfully.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colorful",
            });
        }
        setForm({ site: '', username: '', password: '' });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Copied to clipboard!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colorful",
                });
            })
            .catch(() => {
                toast.error("Failed to copy!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colorful",
                });
            });
    };

    const editPass = (index) => {
        setForm(passArr[index]);
        setEditIndex(index);


    };

    const deleteSite = (index) => {
        const updatedPassArr = [...passArr];
        updatedPassArr.splice(index, 1);
        setPassArr(updatedPassArr);
        localStorage.setItem('passwords', JSON.stringify(updatedPassArr));
        toast.success("Password Deleted Successfully.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colorful",
        });
    };

    return (
        <>
            <ToastContainer />

            <div className="fixed top-0 -z-10 h-full w-full bg-purple-100">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[70%] translate-y-[20%] rounded-full bg-[rgba(165,114,224,0.5)] opacity-70 blur-[80px]"></div>
            </div>

            <div className="mx-auto max-w-3xl m-10 rounded-2xl p-4">
                <div className="logo font-bold text-3xl text-center mt-5">
                    <span className="text-purple-900">&lt; </span>
                    Pass
                    <span className="text-purple-900">OP/ &gt; </span>
                </div>
                <p className="text-center font-semibold">Securely Save Your Passwords Here</p>
                <div className="text-white flex flex-col p-4 space-y-8 ">
                    <input
                        value={form.site}
                        onChange={handleChange}
                        className="rounded-2xl border-2 border-bold text-black px-2 py-1 border-purple-900"
                        placeholder="Enter Web URL"
                        type="text"
                        name="site"
                    />
                    <div className="custom-class flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <input
                            value={form.username}
                            onChange={handleChange}
                            className="rounded-2xl border-2 border-bold text-black px-2 py-1 border-purple-900 w-full md:w-[calc(50%-8px)]"
                            placeholder="Enter Username"
                            type="text"
                            name="username"
                        />
                        <div className="relative flex flex-col w-full md:w-[calc(50%-8px)]"> 
                            <input
                                ref={passRef}
                                value={form.password}
                                onChange={handleChange}
                                className="rounded-2xl border-2 border-bold text-black px-2 py-1 border-purple-900 w-full"
                                placeholder="Enter Password"
                                type="password"
                                name="password"
                            />
                            <span
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={showPass}
                            >
                                <img
                                    ref={ref}
                                    width="23"
                                    height="23"
                                    src="https://img.icons8.com/nolan/64/hide.png"
                                    alt="visible"
                                />
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={savePass}
                        className="flex justify-center items-center text-black font-semibold gap-x-1 w-fit rounded-3xl p-2 border-r-8 border-b-8 border-t-2 border-l-2 border-black border-double hover:font-bold"
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        ></lord-icon>
                        Add Password
                    </button>
                </div>
                <div className="passwords mt-5 space-y-2">
                    <h2 className="font-bold text-2xl text-center">Your Passwords</h2>
                    {passArr.length === 0 ? (
                        <div className="text-center font-semibold">No Passwords Saved</div>
                    ) : (
                        <div className="overflow-x-auto md:overflow-visible">
                            <table className="table-auto w-full rounded-lg overflow-hidden shadow-2xl">
                                <thead className="bg-purple-400 text-left">
                                    <tr>
                                        <th className="px-4 py-2">Site</th>
                                        <th className="px-4 py-2">Username</th>
                                        <th className="px-4 py-2">Password</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-purple-200">
                                    {passArr.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2">
                                                <div className="flex flex-row cursor-pointer gap-2" onClick={() => { copyText(item.site); }}>
                                                    <lord-icon
                                                        style={{ width: "25px", height: "25px" }}
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                    <a href={item.site} target="_blank" rel="noopener noreferrer">
                                                        {item.site}
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="px-4 py-2">
                                                <div className="flex flex-row cursor-pointer gap-2">
                                                    <lord-icon
                                                        onClick={() => { copyText(item.username); }}
                                                        style={{ width: "25px", height: "25px" }}
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                    {item.username}
                                                </div>
                                            </td>
                                            <td className="px-4 py-2">
                                                <div className="flex flex-row cursor-pointer gap-2">
                                                    <lord-icon
                                                        onClick={() => { copyText(item.password); }}
                                                        style={{ width: "25px", height: "25px" }}
                                                        src="https://cdn.lordicon.com/depeqmsz.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                    {item.password}
                                                </div>
                                            </td>
                                            <td className="px-4 py-2">
                                                <div className="flex flex-row cursor-pointer gap-2">
                                                    <img
                                                        src={writing}
                                                        alt="edit"
                                                        style={{ width: "32px", height: "35px", cursor: "pointer" }}
                                                        title="Edit"
                                                        onClick={() => { editPass(index); }}
                                                    />
                                                    <lord-icon
                                                        onClick={() => { deleteSite(index); }}
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                    ></lord-icon>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
};

export default Manager;