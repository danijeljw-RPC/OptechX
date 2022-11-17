import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OsCatalogueService } from 'src/app/shared/services/os-catalogue.service';

@Component({
  selector: 'app-os-catalogue',
  templateUrl: './os-catalogue.component.html',
  styleUrls: ['./os-catalogue.component.scss']
})
export class OsCatalogueComponent implements OnInit {
  osCatalougeData: any;
  viewOsCatelog: any;
  language: any[] = [];

  constructor(private osCatalougeService : OsCatalogueService) { }

  ngOnInit(): void {
    this.getOSCatalouge();
    this.getLanguageList();
  }

  getOSCatalouge() {
    this.osCatalougeService.getOsCatalouge().subscribe((res: any) => {
      console.log(`os cat--- `, res)
      this.osCatalougeData = res;
    });
  }

  getLanguageList() {
    this.osCatalougeService.getLanguages().subscribe((res:any) =>{
      console.log('lan',res);
      this.language = res;
      console.log(this.language);
    })
  }

  onChangeOfRelease(value){
    if(value == 0){
      this.getOSCatalouge();
  }else {
      this.osCatalougeService.getOsCatalougeByRelease(value).subscribe(res =>{
        this.osCatalougeData = res;
      })
    }
  }

  onChangeOfArch(value){
    if(value == 0){
      this.getOSCatalouge();
  }else {
      this.osCatalougeService.getOsCatalougeByArch(value).subscribe(res =>{
        this.osCatalougeData = res;
      })
    }
  }

  onChangeOfLanguage(value){
    if(value == 0){
      this.getOSCatalouge();
  }else {
      switch (value) {
        case 'Arabic':
          this.osCatalougeService.getArabic(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Brazilian':
          this.osCatalougeService.getBrazilian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Bulgarian':
          this.osCatalougeService.getBulgarian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Chinese':
          this.osCatalougeService.getChinese(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
          case 'Chinese_Traditional':
          this.osCatalougeService.getChineseTraditional(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Croatian':
          this.osCatalougeService.getCroatian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Czech':
          this.osCatalougeService.getCzech(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Danish':
          this.osCatalougeService.getDanish(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Dutch':
          this.osCatalougeService.getDutch(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'English':
          this.osCatalougeService.getEnglish(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'English_International':
          this.osCatalougeService.getEnglishInternational(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Estonian':
          this.osCatalougeService.getEstonian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Finnish':
          this.osCatalougeService.getFinnish(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'French':
          this.osCatalougeService.getFrench(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'French_Canadian':
          this.osCatalougeService.getFrenchCanadian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'German':
          this.osCatalougeService.getGerman(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Greek':
          this.osCatalougeService.getGreek(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Hebrew':
          this.osCatalougeService.getHebrew(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Hungarian':
          this.osCatalougeService.getHungarian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Italian':
          this.osCatalougeService.getItalian(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Japanese':
          this.osCatalougeService.getJapanese(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
        case 'Korean':
          this.osCatalougeService.getKorean(value).subscribe((res) => {
            this.osCatalougeData = res;
          })
          break;
          case 'Latvian':
            this.osCatalougeService.getLatvian(value).subscribe((res) => {
              this.osCatalougeData = res;
            })
            break;
          case 'Lithuanian':
            this.osCatalougeService.getLithuanian(value).subscribe((res) => {
              this.osCatalougeData = res;
            })
            break;
            case 'Norwegian':
              this.osCatalougeService.getNorwegian(value).subscribe((res) => {
                this.osCatalougeData = res;
              })
              break;
            case 'Polish':
              this.osCatalougeService.getPolish(value).subscribe((res) => {
                this.osCatalougeData = res;
              })
              break;
              case 'Portuguese':
                this.osCatalougeService.getPortuguese(value).subscribe((res) => {
                  this.osCatalougeData = res;
                })
                break;
              case 'Romanian':
                this.osCatalougeService.getRomanian(value).subscribe((res) => {
                  this.osCatalougeData = res;
                })
                break;
                case 'Russian':
                  this.osCatalougeService.getRussian(value).subscribe((res) => {
                    this.osCatalougeData = res;
                  })
                  break;
                case 'Serbian_Latin':
                  this.osCatalougeService.getSerbianLatin(value).subscribe((res) => {
                    this.osCatalougeData = res;
                  })
                  break;
                  case 'Slovak':
                    this.osCatalougeService.getSlovak(value).subscribe((res) => {
                      this.osCatalougeData = res;
                    })
                    break;
                  case 'Slovenian':
                    this.osCatalougeService.getSlovenian(value).subscribe((res) => {
                      this.osCatalougeData = res;
                    })
                    break;
                    case 'Spanish':
                      this.osCatalougeService.getSpanish(value).subscribe((res) => {
                        this.osCatalougeData = res;
                      })
                      break;
                    case 'Swedish':
                      this.osCatalougeService.getSwedish(value).subscribe((res) => {
                        this.osCatalougeData = res;
                      })
                      break;
                      case 'Thai':
                    this.osCatalougeService.getThai(value).subscribe((res) => {
                      this.osCatalougeData = res;
                    })
                    break;
                    case 'Turkish':
                      this.osCatalougeService.getTurkish(value).subscribe((res) => {
                        this.osCatalougeData = res;
                      })
                      break;
                    case 'Ukrainian':
                      this.osCatalougeService.getUkrainian(value).subscribe((res) => {
                        this.osCatalougeData = res;
                      })
                      break;
                      default: 
                      this.osCatalougeData
                     break;
      }
    }
  }
}
