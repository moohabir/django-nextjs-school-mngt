'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import UpdateForm from '../students/[id]/page';
import { Student } from '@/types';

const url = process.env.NEXT_PUBLIC_URL;

type Props = {
  student: Student;
};

export default function StudentList({ student }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    const response = await axios.delete(`${url}+${student.id}/`);
    window.location.reload();
  };

  const startUpdate = async () => {
    router.push(`/students/${student.id}`);
  };

  return (
    <div className="p-4  items-center flex flex-col ">
      <section className="rounded-md bg-slate-400 p-4 flex  gap-2 ">
        <table>
          <thead className="gap-2">
            <tr className="gap-2">
              <th> Student number</th>
              <th> First name</th>
              <th> Last name</th>
              <th> Email</th>
              <th> Field of study</th>
              <th> GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center gap-2">
              <td>{student.student_number}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.field_of_study}</td>
              <td>{student.gpa}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex  gap-2  items-center">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={startUpdate}>Edit</button>
        </div>
      </section>
    </div>
  );
}
