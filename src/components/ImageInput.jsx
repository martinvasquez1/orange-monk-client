import { useEffect, useState } from 'react';

import Icon from './Icon';
import { RiUploadCloud2Line } from 'react-icons/ri';

export default function ImageInput({ labelText, setImage }) {
  const [showImageInput, setShowImageInput] = useState(true);
  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    } else {
      setFile('');
    }
  };

  useEffect(() => {
    if (showImageInput) {
      setImage(file);
    } else {
      setImage(url);
    }
  }, [file, url]);

  return (
    <div className="mt-4 w-full">
      <p className="label-text mb-4">{labelText}</p>
      <div className="flex items-center border-b-2 border-base-300 bg-base-200">
        <button
          onClick={() => setShowImageInput(true)}
          className={`flex-1 py-3 ${showImageInput === true ? 'bg-base-300' : 'hover:bg-base-300/50'}`}
          type="button"
        >
          File
        </button>
        <button
          onClick={() => setShowImageInput(false)}
          className={`flex-1 py-3 ${showImageInput === false ? 'bg-base-300' : 'hover:bg-base-300/50'}`}
          type="button"
        >
          URL
        </button>
      </div>
      <div>
        <div
          className={`flex w-full items-center justify-center ${!showImageInput && 'hidden'}`}
        >
          <label
            htmlFor="dropzone-file"
            className="flex h-48 w-full cursor-pointer flex-col items-center justify-center bg-base-200 hover:bg-base-200/80"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <Icon icon={<RiUploadCloud2Line />} size="large" />
              <p className="mb-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              {file && <p className="text-sm">{file.name}</p>}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div
          className={`flex h-48 w-full justify-center bg-base-200 ${showImageInput && 'hidden'}`}
        >
          <label className="form-control mx-10 mt-7 w-full">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <div className="label">
              <span className="label-text-alt">
                Allowed formats: PNG, JPEG, JPG, GIF only
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
