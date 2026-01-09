import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 text-textSecondary">
      <div className="border-t border-gray-800 pt-6">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div>© {new Date().getFullYear()} Harshith</div>
          {/* <h3 className="text-lg font-semibold">
            Want to build something meaningful?
          </h3>
          <p className="text-textSecondary mt-2">
            I’m open to ML, backend, and data-driven engineering roles.
          </p> */}

          <div className="flex gap-4">
            <a href="mailto:harshithkompala00@gmail.com" className="text-textSecondary">Email</a>
            <a href="https://github.com/harshith113-5" className="text-textSecondary">GitHub</a>
            <a href="https://www.linkedin.com/in/harshith-k-816664284/" className="text-textSecondary">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
