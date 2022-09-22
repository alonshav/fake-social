import { AjaxAdapter } from './ajax.adapter';
import { IPost } from '@fake-social/api-interfaces';


const baseApiUrl = 'http://localhost:3333/api';

class ApiAdapter extends AjaxAdapter {

  async getPosts() {
      const { data, error } = await this.request({ url: baseApiUrl + '/posts', method: 'get' });
      if (error) {
        throw new Error('posts request failed')
      } else {
        return data
      }
  }
}

const apiAdapter = new ApiAdapter();
export default apiAdapter;
