'use client';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';

const url = process.env.NEXT_PUBLIC_URL;

export default function UpdateForm() {
  const { id } = useParams();
  console.log(id);
  const [updatedStudent, setUpdatedStudent] = useState({
    student_number: '',
    first_name: '',
    last_name: '',
    email: '',
    field_of_study: '',
    gpa: '',
  });
  const [updatedId, setUpdatedId] = useState('');

  console.log(updatedId);

  const router = useRouter();

  //console.log(updatedStudent);

  useEffect(() => {
    // Fetch students data and update the state
    async function fetchStudents() {
      try {
        const { data } = await axios.get(`${url}+${id}/`);

        console.log(data);
        setUpdatedStudent(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }

    fetchStudents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${url}+${id}/`, updatedStudent);

      router.push('/');
      //window.location.reload();
      console.log(response.data);

      // Handle the response as needed
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="items center text-center bg-slate-800 pt-10 ">
      <h1 className="text-white p-4">Update Student Data</h1>
      <form
        onSubmit={handleUpdate}
        className=" flex flex-col  items-center  gap-1  text-black rounded-md "
      >
        {/* Form to input new student data */}
        <input
          type="number"
          name="student_number"
          placeholder="Student Number"
          value={updatedStudent?.student_number}
          onChange={handleInputChange}
          className="rounded-sm p-4   w-1/2"
        />
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          value={updatedStudent?.first_name}
          onChange={handleInputChange}
          className="rounded-sm p-4  w-1/2"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last name"
          value={updatedStudent?.last_name}
          onChange={handleInputChange}
          className="rounded-sm p-4  w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={updatedStudent?.email}
          onChange={handleInputChange}
          className="rounded-sm p-4  w-1/2"
        />

        <input
          type="text"
          name="field_of_study"
          placeholder="field of study"
          value={updatedStudent?.field_of_study}
          onChange={handleInputChange}
          className="rounded-sm p-4  w-1/2"
        />

        <input
          type="number"
          name="gpa"
          placeholder="Gpa"
          value={updatedStudent?.gpa}
          onChange={handleInputChange}
          className="rounded-sm p-4  w-1/2"
        />

        <button
          type="submit"
          className="bg-slate-100 text-black rounded-md p-2 m-4 hover:bg-slate-300"
        >
          Update Student
        </button>
      </form>
    </div>
  );
}
