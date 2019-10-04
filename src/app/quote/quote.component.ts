import { Component, OnInit } from '@angular/core';
import { IQuote } from '../quotes/quotes.component';
import { ILanguage } from '../shared/languages-list/languages-list.component';
import { ActivatedRoute, Router } from '@angular/router';

const dataQ: IQuote[] = [
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
    author_img: 'https://source.unsplash.com/collection/895539/200x200',
    language_id: 2,
    user_id: 2
  },
  {
    id: 5,
    content: `\"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core
    of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in,
      even in the toughest situations of life.\"`,
    link_to_the_source: `https://www.christianpost.com/news
    /ravi-zacharias-to-liberty-univ-graduates-draw-the-right-lines-in-life-find-your-definitions-in-god.html`,
    approuved: true,
    created_at: '2019-09-03 09:06:25',
    updated_at: '2019-09-03 09:06:25',
    author_id: 2,
    author: 'Ravi Zacharias',
    author_img: 'https://source.unsplash.com/collection/895539/201x201',
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
    author_img: 'https://source.unsplash.com/collection/895539/202x202',
    language_id: 2,
    user_id: 2
  },
  {
    id: 7,
    content: `\"Outside of the cross of Jesus Christ, there is no hope in this world. That cross and resurrection at the core
    of the Gospel is the only hope for humanity. Wherever you go, ask God for wisdom on how to get that Gospel in,
      even in the toughest situations of life.\"`,
    link_to_the_source: `https://www.christianpost.com/news
    /ravi-zacharias-to-liberty-univ-graduates-draw-the-right-lines-in-life-find-your-definitions-in-god.html`,
    approuved: true,
    created_at: '2019-09-03 09:06:25',
    updated_at: '2019-09-03 09:06:25',
    author_id: 2,
    author: 'Ravi Zacharias',
    author_img: 'https://source.unsplash.com/collection/895539/203x203',
    language_id: 2,
    user_id: 2
  },
  {
    id: 8,
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
    author_img: 'https://source.unsplash.com/collection/895539/204x204',
    language_id: 2,
    user_id: 2
  },
  {
    id: 9,
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
    author_img: 'https://source.unsplash.com/collection/895539/205x205',
    language_id: 2,
    user_id: 2
  }
];

const dataL: ILanguage[] = [
  {
    id: 1,
    name: 'Français'
  },
  {
    id: 2,
    name: 'English'
  }
];

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: IQuote;
  constructor(private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quote = this.getQuoteById(id);
    if (this.quote === undefined) {
      this.navigateTo404();
    }
  }

  getQuoteById(id: number): IQuote {
    return dataQ.find((q) => {
      return q.id === id;
    });
  }
  navigateTo404() {
    this.router.navigateByUrl('/404');
  }
}
