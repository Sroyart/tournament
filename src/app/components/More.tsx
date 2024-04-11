"use client";

import React from "react";

const More: React.FC<{
  id: number;
  children: React.ReactNode;
}> = ({ id, children }) => {
  const [more, setMore] = React.useState<number | null>(null);
  return (
    <>
      <div
        onClick={() => setMore(id === more ? null : id)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Détail
      </div>
      {more ? children : null}
    </>
  );
};

export default More;
