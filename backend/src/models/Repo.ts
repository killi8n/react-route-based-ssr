export type RepoType = {
  title: string;
  url: string;
};

class Repo {
  title: string = '';
  url: string = '';

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

export default Repo;
