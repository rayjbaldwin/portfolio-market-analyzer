
// API calls for portfolio and stocks
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface PortfolioSummary { id: number; name: string; }
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioUrl = 'http://localhost:3000/api/portfolios';
  private stockUrl = 'http://localhost:3000/api/stocks';

  constructor(private http: HttpClient) {}

  createPortfolio(user_id: number, name: string): Observable<any> {
    return this.http.post(this.portfolioUrl, { user_id, name });
  }

  getPortfolio(id: number): Observable<any> {
    return this.http.get(`${this.portfolioUrl}/${id}`);
  }

  updatePortfolio(id: number, stocks: any[]): Observable<any> {
    return this.http.put(`${this.portfolioUrl}/${id}`, { stocks });
  }

  getUserPortfolios(): Observable<PortfolioSummary[]> {
    return this.http.get<PortfolioSummary[]>(this.portfolioUrl);
  }

  simulatePortfolio(id: number, startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.portfolioUrl}/${id}/simulate?startDate=${startDate}&endDate=${endDate}`);
  }

  fetchStockHistory(ticker: string, startDate: string, endDate: string): Observable<any> {
    return this.http.post(`${this.stockUrl}/history`, { ticker, startDate, endDate });
  }

  removeStock(portfolioId: number, ticker: string): Observable<any> {
    return this.http.delete(`${this.portfolioUrl}/${portfolioId}/stocks/${ticker}`);
  }

  getAllStocks(): Observable<{ ticker: string; name: string }[]> {
    return this.http.get<{ ticker: string; name: string }[]>(`${this.stockUrl}`);
  }
}

