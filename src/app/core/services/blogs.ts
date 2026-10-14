import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = `${environment.baseUrl}/blogs`;

  constructor(private http: HttpClient) {}

  // جلب كل المقالات
  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // جلب مقال واحد بالـ slug
  getBlogBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${slug}`);
  }
}