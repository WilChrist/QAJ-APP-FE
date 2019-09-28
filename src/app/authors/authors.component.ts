import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';

export interface IAuthor {
  id: number;
  full_name: string;
  popular_name: string;
  biography: string;
  link_to_full_biography: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}
const dataA: IAuthor[] = [
  {
    id: 1,
    full_name: 'Clive Staples Lewis',
    popular_name: 'C. S. Lewis',
    biography: `Clive Staples Lewis was one of the intellectual giants of the twentieth century
     and arguably one of the most influential writers of his day. He was a Fellow and Tutor in
     English Literature at Oxford University until 1954. He was unanimously elected to the Chair
      of Medieval and Renaissance Literature at Cambridge University, a position he held until his
       retirement. He wrote more than thirty books, allowing him to reach a vast audience, and his
        works continue to attract thousands of new readers every year. His most distinguished and
         popular accomplishments include Mere Christianity, Out of the Silent Planet, The Great Divorce,
          The Screwtape Letters, and the universally acknowledged classics The Chronicles of Narnia.
           To date, the Narnia books have sold over 100 million copies and been transformed into three major motion pictures.`,
    link_to_full_biography: 'http://www.cslewis.com/us/about-cs-lewis/',
    image_url: 'https://source.unsplash.com/collection/895539/203x203',
    created_at: '2019-09-02 17:02:03',
    updated_at: '2019-09-02 17:02:03'
  },
  {
    id: 2,
    full_name: 'Ravi Zacharias',
    popular_name: 'Ravi Zacharias',
    biography: `He is the founder and chairman of the board of Ravi Zacharias International Ministries,
     host of the radio programs Let My People Think and Just Thinking\r\n\r\nA defender of evangelical
      Protestantism, Ravi is the author of numerous Christian books, including the Gold Medallion Book
       Award winner – Can Man Live Without God? in the category “theology and doctrine” and Christian
        bestsellers Light in the Shadow of Jihad and The Grand Weaver. He has had six honorary doctoral
         degrees, including a Doctor of Laws and a Doctor of Sacred Theology.\r\n\r\nEvangelical Christian
          leader Chuck Colson referred to Zacharias as “the great apologist of our time.”`,
    link_to_full_biography:
      'https://believersportal.com/biography-ravi-zacharias/',
    image_url: 'https://source.unsplash.com/collection/895539/204x204',
    created_at: '2019-09-03 08:57:40',
    updated_at: '2019-09-03 08:57:40'
  }
];

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: IAuthor[];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor() {}

  ngOnInit() {
    this.authors = dataA;
    this.displayMode = DisplayModeEnum.Grid;
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
