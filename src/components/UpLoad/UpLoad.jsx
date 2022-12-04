import "./UpLoad.sass";
import { useState, useRef } from "react";
import { useEffect } from 'react';
import getMask from '../../utils/getMask/getMask';

const UpLoad = () => {
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [upload, setUpload] = useState();

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Обработчик загрузки картинки
  const handlePick = () => {
    filePicker.current.click();
  }

  const handleDelete = () => {
    setSelectedFile(null);
    setPreview(null);
  }

  // Обработчик отправки файла на сервер
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please, select file!");
      return;
    };

    const formData = new FormData();
    formData.append("file", selectedFile);

    alert('Картинка отправлена на сервер!!!')

    // *** Логика отправки файла на сервер ***
    // const res = await fetch("url", {
    // method: "POST",
    // body: formData,
    // });
    // const data = await res.json();
    // setUpload(data);

  }

  // Обработчик отображения привью загруженной картинки
  useEffect(() => {
    if (selectedFile !== null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result)
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile])

  return (
    <label className="upload">
      <span>Ваша фотография</span>
      <img className={selectedFile === null ? "upload__selected-foto_hidden" : "upload__selected-foto"} src={preview} alt="Ваша фотография"/>
      <button className={selectedFile === null ? "upload__load" : "upload__delete"} onClick={selectedFile === null ? handlePick : handleDelete} type="button">{selectedFile === null ? "Загрузить" : "Удалить"}</button>
      <input
        className="upload__input"
        ref={filePicker}
        type="file"
        onChange={handleChange}
        accept="image/*,.png,.jpg,.jpeg,.gif,.web,"
      />
      {getMask('poster')}
    </label>
  );
};

export default UpLoad;
