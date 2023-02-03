import { HttpService } from '@/service/Http';

export const login = (p: any) => new HttpService().post('/api/login', p);

export const findInfo = (p: any) => new HttpService().get('/api/find-info', p);