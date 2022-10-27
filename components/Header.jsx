import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto mb-8">
      <div className="border-b w-full border-black-400">
        <nav className="flex flex-wrap items-center justify-between h-16 mb-4 sticky">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">
              ethereumblock
            </span>
          </Link>
          <div className="">
            <Link href="/guides">
              <a
                className="text-black active:border-b-2 hover:text-indigo-700 hover:border-b-2 px-3 py-2 rounded-md text-sm font-medium">
                <span>Guides</span>
              </a>
            </Link>
            <Link href="/ressourcen">
              <a
                className="text-black active:border-b-2 hover:text-indigo-700 hover:border-b-2 px-3 py-2 rounded-md text-sm font-medium">
                <span>Ressourcen</span>
              </a>
            </Link>
            <Link href="/mehr">
              <a
                className="text-black active:border-b-2 hover:text-indigo-700 hover:border-b-2 px-3 py-2 rounded-md text-sm font-medium">
                <span>Mehr</span>
              </a>
            </Link>
          </div>
        </nav>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
