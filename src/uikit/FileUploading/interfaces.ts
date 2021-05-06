import React from 'react';

export interface FileType {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

export type FileListType = Array<FileType>;

export interface ImageUploadingPropsType {
  value: FileListType;
  onChange: (value: FileListType, addUpdatedIndex?: Array<number>) => void;
  children?: (props: ExportInterface) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  acceptType?: Array<string>;
  maxFileSize?: number;
  resolutionWidth?: number;
  resolutionHeight?: number;
  resolutionType?: ResolutionType;
  onError?: (errors: ErrorsType, files?: FileListType) => void;
  dataURLKey?: string;
}

export interface ExportInterface {
  imageList: FileListType;
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  errors: ErrorsType;
  onImageUpdate: (index: number) => void;
  onImageRemove: (index: number) => void;
  isDragging: boolean;
  dragProps: {
    onDrop: (e: any) => void;
    onDragEnter: (e: any) => void;
    onDragLeave: (e: any) => void;
    onDragOver: (e: any) => void;
  };
}

export type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  acceptType?: boolean;
  resolution?: boolean;
} | null;

export type ResolutionType = 'absolute' | 'less' | 'more' | 'ratio';
