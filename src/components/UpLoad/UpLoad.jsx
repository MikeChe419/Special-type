import "./UpLoad.sass";
import { useState, useRef } from "react";
import { useEffect } from 'react';

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

  // Обработчик удаления картинки
  const deletePick = () => {
    setSelectedFile(null);
  }

  // Смена функции основной кнопки Загрузить
  const changeFunction = () => {
    if (selectedFile === null) {
      handlePick();
    } else {
      handleUpload()
    }
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
    if (selectedFile) {
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

        <div className={`upload__preview-block ${selectedFile !== null && 'upload__preview-block_visible'}`}>
          <img className='upload__selected-foto' src={preview} alt="Ваша фотография"/>
          <div className='upload__preview-buttons'>
            <button className='upload__preview-button' name="change" onClick={handlePick} type="button">Изменить</button>
            <button className='upload__preview-button' name="delete" onClick={deletePick} type="button">Удалить</button>
          </div>

        </div>

      <button className="upload__load" onClick={changeFunction} type="button">Загрузить</button>
      <input
        className="upload__input"
        ref={filePicker}
        type="file"
        onChange={handleChange}
        placeholder="Загрузить"
        accept="image/*,.png,.jpg,.jpeg,.gif,.web,"
      />

    </label>
  );
};

export default UpLoad;
