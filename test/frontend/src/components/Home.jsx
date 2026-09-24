import { useEffect, useState } from "react";
import { getStudents } from "../services/ApiServices";

export default function StudentCrudLanding() {
  const [studentCount, setStudentCount] = useState(0);
  const [isLoadingStudents, setIsLoadingStudents] = useState(true);
  const [studentsError, setStudentsError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadStudents = async () => {
      try {
        const data = await getStudents();

        if (isMounted) {
          setStudentCount(Array.isArray(data.students) ? data.students.length : 0);
        }
      } catch {
        if (isMounted) {
          setStudentsError("Unable to load student data");
        }
      } finally {
        if (isMounted) {
          setIsLoadingStudents(false);
        }
      }
    };

    loadStudents();

    return () => {
      isMounted = false;
    };
  }, []);

  const features = [
    {
      icon: "+",
      bg: "bg-green-500",
      title: "Add Students",
      desc: "Quickly add new student records with all necessary details.",
    },
    {
      icon: "👁",
      bg: "bg-blue-500",
      title: "View Students",
      desc: "Easily view and manage all student information.",
    },
    {
      icon: "✎",
      bg: "bg-amber-500",
      title: "Update Records",
      desc: "Keep student information up to date at all times.",
    },
    {
      icon: "🗑",
      bg: "bg-red-500",
      title: "Delete Students",
      desc: "Remove unwanted records with a single click.",
    },
  ];

  return (
    <div className="bg-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <span className="text-xl font-bold text-slate-900">Student CRUD</span>
        </div>
        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Home
          </a>
          <a href="#">Students</a>
          <a href="#">About</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="bg-blue-50 px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            👥 Manage Your Students Easily
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            Student <span className="text-blue-600">Management</span> System
          </h1>
          <p className="text-slate-500 text-lg mb-8">
            A simple and efficient way to manage student information. Create,
            view, update and delete student records with ease.
          </p>
          <p className="text-slate-600 mb-6" aria-live="polite">
            {isLoadingStudents
              ? "Loading students..."
              : studentsError || `${studentCount} student${studentCount === 1 ? "" : "s"} currently managed`}
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
              Get Started <span>›</span>
            </button>
            <button className="border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <div className="bg-blue-100 rounded-3xl h-80 flex items-center justify-center text-slate-400 text-sm">
            [ Illustration ]
          </div>
          <div className="absolute top-4 right-0 bg-white rounded-xl shadow-lg p-4 space-y-3 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white rounded p-1 w-6 h-6 flex items-center justify-center">
                +
              </span>
              Create
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 text-white rounded p-1 w-6 h-6 flex items-center justify-center">
                👁
              </span>
              Read
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-white rounded p-1 w-6 h-6 flex items-center justify-center">
                ✎
              </span>
              Update
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white rounded p-1 w-6 h-6 flex items-center justify-center">
                🗑
              </span>
              Delete
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
          Our Features
        </h2>
        <p className="text-slate-500 mb-12">
          Everything you need to manage students, all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 text-left hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 rounded-full ${f.bg} text-white flex items-center justify-center text-xl mb-4`}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-lg">Student CRUD</span>
          </div>
          <p className="text-slate-400 text-sm">Simple • Secure • Efficient</p>
        </div>
        <div className="flex gap-8 text-slate-300 text-sm">
          <a href="#">Home</a>
          <a href="#">Students</a>
          <a href="#">About</a>
        </div>
        <p className="text-slate-500 text-sm">
          © 2025 Student CRUD. All rights reserved.
        </p>
      </footer>
    </div>
  );
}