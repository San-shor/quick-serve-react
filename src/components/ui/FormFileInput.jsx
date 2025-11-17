export const FormFileInput = (
  {
    label,
    name,
    accept,
    onChange,
    error,
    required = false,
    disabled = false,
    preview,
    uploading = false,
    uploadSuccess = false,
    className = "",
    ...props
  },
  ref
) => {
  return (
    <div>
      {label && (
        <label className="block text-sm mb-2 text-gray-600 font-semibold">
          {label} {required && "*"}
        </label>
      )}
      <input
        ref={ref}
        type="file"
        name={name}
        accept={accept}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-700 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        {...props}
      />

      {uploading && (
        <p className="mt-2 text-sm text-blue-600">Uploading image...</p>
      )}

      {uploadSuccess && (
        <p className="mt-2 text-sm text-green-600">
          Image uploaded successfully!
        </p>
      )}

      {preview && (
        <div className="mt-3">
          <img
            src={preview}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </div>
      )}

      {error && <p className="text-sm mt-1 text-red-500">{error}</p>}
    </div>
  );
};
