import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './carousel.animation';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  imgags = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/5.jpg',
    'assets/img/6.jpg',
    'assets/img/7.jpg',
    'assets/img/8.jpg',
    'assets/img/9.jpg',
    'assets/img/10.jpg',
    'assets/img/11.jpg',
    'assets/img/12.jpg',
    'assets/img/13.jpg',
    'assets/img/14.jpg',
    'assets/img/15.jpg',
    'assets/img/16.jpg',
    'assets/img/17.jpg',
    'assets/img/18.jpg',
    'assets/img/19.jpg',
    'assets/img/20.jpg',
    'assets/img/21.jpg',
    'assets/img/22.jpg',
    'assets/img/23.jpg',
    'assets/img/24.jpg',
    'assets/img/25.jpg',
    'assets/img/26.jpg',
    'assets/img/27.jpg',
    'assets/img/28.jpg',
    'assets/img/29.jpg',
    'assets/img/31.jpg',
    'assets/img/32.jpg',
    'assets/img/33.jpg',
    'assets/img/34.jpg'
  ];
  quotes = [
    {
      id: 4,
      content: `\"I am trying here to prevent anyone saying the really foolish thing that people often say about Him:
      I’m ready to accept Jesus as a great moral teacher, but I don’t accept his claim to be God.
      That is the one thing we must not say. A man who was merely a man and said the sort of things
      Jesus said would not be a great moral teacher. He would either be a lunatic — on the level with
      the man who says he is a poached egg — or else he would be the Devil of Hell. You must make your choice.
      Either this man was, and is, the Son of God, or else a madman or something worse.
      You can shut him up for a fool, you can spit at him and kill him as a demon or you can fall at his feet and call him Lord and God,
        but let us not come with any patronizing nonsense about his being a great human teacher.
        He has not left that open to us. He did not intend to.\"`,
      link_to_the_source:
        'https://www.goodreads.com/quotes/6979-i-am-trying-here-to-prevent-anyone-saying-the-really',
      approuved: true,
      created_at: '2019-09-03 07:43:32',
      updated_at: '2019-09-03 07:43:32',
      author_id: 1,
      author: 'C. S. Lewis',
      language_id: 2,
      user_id: 2
    },
    {
      id: 5,
      content: `\"Outside of the cross of Jesus Christ, there is no hope in this world.
       That cross and resurrection at the core of the Gospel is the only hope for humanity.
        Wherever you go, ask God for wisdom on how to get that Gospel in,
        even in the toughest situations of life.\"`,
      link_to_the_source: `https://www.christianpost.com/news
      /ravi-zacharias-to-liberty-univ-graduates-draw-the-right-lines-in-life-find-your-definitions-in-god.html`,
      approuved: true,
      created_at: '2019-09-03 09:06:25',
      updated_at: '2019-09-03 09:06:25',
      author_id: 2,
      author: 'Ravi Zacharias',
      language_id: 2,
      user_id: 2
    },
    {
      id: 6,
      content: `\"The assurance of Heaven is never given to the person. And that\'s why at the core of the Christian faith
      is the grace of God. If there\'s one word I would grab from all of that, it\'s forgiveness - that you can be forgiven.
      I can be forgiven, and it is of the grace of God. But once you understand that, I think the ramifications are worldwide.\"`,
      link_to_the_source:
        'https://www1.cbn.com/churchandministry/what-makes-the-christian-message-unique',
      approuved: false,
      created_at: '2019-09-03 09:09:15',
      updated_at: '2019-09-03 09:09:15',
      author_id: 2,
      author: 'R. Zacharias',
      language_id: 2,
      user_id: 2
    }
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 2500 },
    animation: 'lazy'
  };
  tempData: any[];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(5),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }
}
