import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const groups = [
  {
    name: 'Innovators',
    description:
      'A group for enthusiasts and professionals in the tech industry to share ideas and trends.',
    imageUrl: 'https://example.com/images/tech-innovators.jpg',
  },
  {
    name: 'Book Club',
    description:
      'Join fellow readers to discuss the latest books, share reviews, and enjoy literary conversations.',
    imageUrl: 'https://example.com/images/book-club.jpg',
  },
  {
    name: 'Fitness Fanatics',
    description:
      'Connect with others who are passionate about fitness, wellness, and healthy living.',
    imageUrl: 'https://example.com/images/fitness-fanatics.jpg',
  },
  {
    name: 'Travel Enthusiasts',
    description:
      'Share travel experiences, tips, and recommendations with fellow adventurers.',
    imageUrl: 'https://example.com/images/travel-enthusiasts.jpg',
  },
  {
    name: 'Programming Wizards',
    description:
      'A community for developers of all levels to collaborate on projects and share coding tips.',
    imageUrl: 'https://example.com/images/programming-wizards.jpg',
  },
  {
    name: 'Cooking Creatives',
    description:
      'Explore new recipes, cooking techniques, and culinary adventures with a group of food lovers.',
    imageUrl: 'https://example.com/images/cooking-creatives.jpg',
  },
  {
    name: 'Movie Buffs',
    description:
      'Discuss your favorite films, discover new releases, and dive into movie reviews and critiques.',
    imageUrl: 'https://example.com/images/movie-buffs.jpg',
  },
];

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
        {groups.map((group) => {
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
        })}
      </div>
    </div>
  );
}
