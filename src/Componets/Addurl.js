import React from "react";

export default function Addurl() {
  return (
      <div className="">
        <label
          for="website"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Website URL
        </label>
        <input
          type="url"
          id="website"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96"
          placeholder="http://xyz.com"
          required
        />
      </div>
  );
}
