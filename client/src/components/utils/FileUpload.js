import React from 'react';
import { Icon } from 'antd';
import Dropzone from 'react-dropzone';

function FileUpload() {
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone
            onDrop
            multiple
            maxSize
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{width:'300px', height: '240px', border: '1px solid lightgrey', display: 'flex', alignItems: 'center' }}
                    {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{fontSize: '3em'}} />

                    </div>
                )}



            </Dropzone>



        </div>
    )
}

export default FileUpload
