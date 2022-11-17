import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OsCatalogueService {

  constructor(private httpClient: HttpClient) { }


  getOsCatalouge() {
    return this.httpClient.get(`${environment.BASE_URL}v1/WindowsCoreIdentity`);
  }

  getLanguages() {
    return this.httpClient.get(`${environment.BASE_URL}v1/WinRefCore05Language`);
  }

   getDataByLanguageID() {
    return this.httpClient.get(`${environment.BASE_URL}v1/`);
   }

   getOsCatalougeByRelease(release) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WindowsCoreIdentity/release/${release}`)
   }

   getOsCatalougeByArch(arch) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WindowsCoreIdentity/arch/${arch}`)
   }

  //  languages
   getArabic(Arabic){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Arabic}`)
   }

   getBrazilian(Brazilian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Brazilian}`)
   }

   getBulgarian(Bulgarian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Bulgarian}`)
   }


   getChinese(Chinese){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Chinese}`)
   }

   getChineseTraditional(Chinese_Traditional) {
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Chinese_Traditional}`)
   }

   getCroatian(Croatian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Croatian}`)
   }

   getCzech(Czech){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Czech}`)
   }

   getDanish(Danish){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Danish}`)
   }

   getDutch(Dutch){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Dutch}`)
   }

   getEnglish(English){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${English}`)
   }

   getEnglishInternational(English_International){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${English_International}`)
   }

   getEstonian(Estonian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Estonian}`)
   }

   getFinnish(Finnish){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Finnish}`)
   }

   getFrench(French){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${French}`)
   }

   getFrenchCanadian(French_Canadian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${French_Canadian}`)
   }

   getGerman(German){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${German}`)
   }

   getGreek(Greek){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Greek}`)
   }

   getHebrew(Hebrew){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Hebrew}`)
   }

   getHungarian(Hungarian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Hungarian}`)
   }

   getItalian(Italian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Italian}`)
   }

   getJapanese(Japanese){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Japanese}`)
   }

   getKorean(Korean){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Korean}`)
   }

   getLatvian(Latvian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Latvian}`)
   }

   getLithuanian(Lithuanian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Lithuanian}`)
   }

   getNorwegian(Norwegian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Norwegian}`)
   }

   getPolish(Polish){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Polish}`)
   }

   getPortuguese(Portuguese){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Portuguese}`)
   }

   getRomanian(Romanian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Romanian}`)
   }

   getRussian(Russian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Russian}`)
   }

   getSerbianLatin(Serbian_Latin){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Serbian_Latin}`)
   }

   getSlovak(Slovak){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Slovak}`)
   }

   getSlovenian(Slovenian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Slovenian}`)
   }

   getSpanish(Spanish){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Spanish}`)
   }

   getSpanish_latam(Spanish_Latam){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Spanish_Latam}`)
   }

   getSwedish(Swedish){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Swedish}`)
   }

   getThai(Thai){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Thai}`)
   }

   getTurkish(Turkish){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Turkish}`)
   }

   getUkrainian(Ukrainian){
    return this.httpClient.get(`${environment.BASE_URL}v1/windowscoreidentity/lcid/${Ukrainian}`)
   }
}
