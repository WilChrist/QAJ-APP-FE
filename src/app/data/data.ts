import { IAuthor, IQuote, ILanguage, ITopic } from '../shared/helpers/Interfaces';

export const allAuthors: IAuthor[] = [
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
    image_url: 'https://source.unsplash.com/collection/895539/403x403',
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
    image_url: 'https://source.unsplash.com/collection/895539/404x404',
    created_at: '2019-09-03 08:57:40',
    updated_at: '2019-09-03 08:57:40'
  },
  {
    id: 3,
    full_name: 'R. Zacharias',
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
    image_url: 'https://source.unsplash.com/collection/895539/405x405',
    created_at: '2019-09-03 08:57:40',
    updated_at: '2019-09-03 08:57:40'
  }
];

export const allQuotes: IQuote[] = [
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
    author_img: 'https://source.unsplash.com/collection/895539/403x403',
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
    author_img: 'https://source.unsplash.com/collection/895539/404x404',
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
    author_id: 3,
    author: 'R. Zacharias',
    author_img: 'https://source.unsplash.com/collection/895539/405x405',
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
    author_img: 'https://source.unsplash.com/collection/895539/404x404',
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
    author_id: 3,
    author: 'R. Zacharias',
    author_img: 'https://source.unsplash.com/collection/895539/405x405',
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
    author_img: 'https://source.unsplash.com/collection/895539/403x403',
    language_id: 2,
    user_id: 2
  }
];

export const allLanguages: ILanguage[] = [
  {
    id: 1,
    name: 'Français'
  },
  {
    id: 2,
    name: 'English'
  }
];
export const allTopics: ITopic[] = [
  {
    id: 1,
    name: 'Apologetic',
    description: 'the defense of the faith',
    created_at: '2019-09-02 17:02:34',
    updated_at: '2019-09-02 17:02:34'
    },
    {
    id: 2,
    name: 'Agnostic',
    description: 'In the Middle with many doubts',
    created_at: '2019-09-02 17:02:51',
    updated_at: '2019-09-02 17:02:51'
    },
    {
    id: 3,
    name: 'Resurrection',
    description: `a capitalized : the rising of Christ from the dead
                  b often capitalized : the rising again to life of all the human dead before the final judgment
                  c : the state of one risen from the dead`,
    created_at: '2019-09-03 09:00:48',
    updated_at: '2019-09-03 09:00:48'
    },
    {
    id: 4,
    name: 'Cross',
    description: `a : a structure consisting of an upright with a transverse beam used especially by the ancient Romans for execution
                  b often capitalized : the cross on which Jesus was crucified`,
    created_at: '2019-09-03 09:03:00',
    updated_at: '2019-09-03 09:03:00'
    }
];
