import "./EditableHeader.css";

export default function EditableHeader() {
  return (
    <>
      <img
        alt="Decorative header background."
        src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg"
        className="headerImage"
      />
      <span className="headerIcon">⭐️</span>
      <h1>Title</h1>
    </>
  );
}

// - **Editable header zone:**
//   - Static icon field. DONE.
//     - Editable icon field.
//   - Static title field. DONE.
//     - Editable title field.
//   - Static cover field. DONE.
//     - Editable cover field.
