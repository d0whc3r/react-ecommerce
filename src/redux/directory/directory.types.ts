export interface DirectorySection {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
  linkUrl: string;
}

export interface DirectoryState {
  sections: DirectorySection[];
}
