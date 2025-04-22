import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/Question.json')
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error('Error loading data:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6"> Questions</h1>
      {questions.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
          <p className="whitespace-pre-wrap">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
