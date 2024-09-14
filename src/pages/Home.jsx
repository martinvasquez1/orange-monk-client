import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({}) {
  return (
    <div className="rounded-2xl bg-base-300">
      <div className="mb-8 mt-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome Oscar Peterson!</h1>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/app/create-group" className="btn">
              Create
            </Link>
            <Link to="/app/search" className="btn btn-primary">
              Search
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {/*groups.map((group) => {
          return (
            <Link
              to="/app/group/123"
              className="rounded-xl bg-base-100 p-4 shadow"
              key={group.name}
            >
              <h2 className="text-lg">{group.name}</h2>
              <p className="mt-1 text-sm text-base-content/70">
                {group.description}
              </p>
            </Link>
          );
        })*/}
      </div>
    </div>
  );
}
