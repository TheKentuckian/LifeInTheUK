// Life in the UK Test - Question Database
// Based on "Life in the United Kingdom: A Guide for New Residents, 3rd Edition"

const questionBank = [
    // Chapter 1: The Values and Principles of the UK
    {
        question: "What are the fundamental principles of British life?",
        answers: [
            "Democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs, and participation in community life",
            "Monarchy, Christianity, the English language, and paying taxes",
            "Following traditions, respecting the Queen, and obeying all laws",
            "Speaking English, having a job, and respecting your neighbors"
        ],
        correctAnswer: 0,
        chapter: 1
    },
    {
        question: "Which TWO of the following are fundamental principles of British life?",
        answers: [
            "Individual liberty",
            "Speaking perfect English",
            "Tolerance of those with different faiths and beliefs",
            "Owning property"
        ],
        correctAnswer: [0, 2],
        chapter: 1
    },
    {
        question: "Is the statement TRUE or FALSE? Everyone in the UK has the right to freedom of speech.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        chapter: 1
    },
    {
        question: "Is the statement TRUE or FALSE? It is acceptable to discriminate against people because of their sex or religion in the UK.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        chapter: 1
    },

    // Chapter 2: What is the UK?
    {
        question: "What is the official name of the country commonly known as Britain?",
        answers: [
            "Great Britain",
            "The United Kingdom of Great Britain and Northern Ireland",
            "The British Isles",
            "England and Wales"
        ],
        correctAnswer: 1,
        chapter: 2
    },
    {
        question: "Which countries make up Great Britain?",
        answers: [
            "England, Scotland, Wales, and Northern Ireland",
            "England, Scotland, and Wales",
            "England, Scotland, Wales, and Ireland",
            "England and Wales only"
        ],
        correctAnswer: 1,
        chapter: 2
    },
    {
        question: "Which of these is a Crown Dependency?",
        answers: [
            "Republic of Ireland",
            "The Channel Islands",
            "Scotland",
            "Northern Ireland"
        ],
        correctAnswer: 1,
        chapter: 2
    },
    {
        question: "What is the capital city of Wales?",
        answers: [
            "Edinburgh",
            "Belfast",
            "Cardiff",
            "Swansea"
        ],
        correctAnswer: 2,
        chapter: 2
    },
    {
        question: "What is the capital city of Scotland?",
        answers: [
            "Glasgow",
            "Aberdeen",
            "Dundee",
            "Edinburgh"
        ],
        correctAnswer: 3,
        chapter: 2
    },
    {
        question: "What is the capital city of Northern Ireland?",
        answers: [
            "Belfast",
            "Dublin",
            "Derry",
            "Armagh"
        ],
        correctAnswer: 0,
        chapter: 2
    },
    {
        question: "Which of these is NOT a patron saint of a UK country?",
        answers: [
            "St George",
            "St Andrew",
            "St David",
            "St Paul"
        ],
        correctAnswer: 3,
        chapter: 2
    },
    {
        question: "What is the flower symbol of England?",
        answers: [
            "Daffodil",
            "Rose",
            "Thistle",
            "Shamrock"
        ],
        correctAnswer: 1,
        chapter: 2
    },

    // Chapter 3: A Long and Illustrious History
    {
        question: "When did the first farmers arrive in Britain?",
        answers: [
            "10,000 years ago",
            "6,000 years ago",
            "4,000 years ago",
            "2,000 years ago"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "What is Stonehenge?",
        answers: [
            "A Roman fort",
            "A medieval castle",
            "A prehistoric monument built during the Stone Age",
            "An Iron Age hill fort"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "During which period did the Romans remain in Britain?",
        answers: [
            "AD 43 to AD 410",
            "55 BC to AD 100",
            "AD 100 to AD 500",
            "AD 410 to AD 600"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "What language did the Anglo-Saxons speak?",
        answers: [
            "Latin",
            "Old Norse",
            "Old English (the basis of modern English)",
            "Celtic"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "In which year did the Norman Conquest take place?",
        answers: [
            "1066",
            "1215",
            "1314",
            "1415"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "Who was the leader of the Norman invasion of England?",
        answers: [
            "Harold II",
            "William the Conqueror",
            "Richard I",
            "Edward the Confessor"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "What is the Domesday Book?",
        answers: [
            "A religious text",
            "A survey of all land and property in England ordered by William the Conqueror",
            "A collection of laws",
            "A history of the Norman kings"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "When was the Magna Carta signed?",
        answers: [
            "1066",
            "1215",
            "1314",
            "1415"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "What did the Magna Carta do?",
        answers: [
            "Created the Church of England",
            "United England and Scotland",
            "Limited the power of the king and protected certain rights",
            "Established Parliament"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "In which battle did Robert the Bruce defeat the English?",
        answers: [
            "The Battle of Hastings",
            "The Battle of Agincourt",
            "The Battle of Bannockburn",
            "The Battle of Waterloo"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "How long did the Hundred Years War between England and France last?",
        answers: [
            "Exactly 100 years",
            "116 years",
            "95 years",
            "150 years"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Which English king broke away from the Roman Catholic Church?",
        answers: [
            "Henry VII",
            "Henry VIII",
            "Edward VI",
            "Henry V"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "How many times was Henry VIII married?",
        answers: [
            "Four times",
            "Five times",
            "Six times",
            "Seven times"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "Which Elizabethan playwright wrote Romeo and Juliet, Hamlet, and A Midsummer Night's Dream?",
        answers: [
            "Christopher Marlowe",
            "Ben Jonson",
            "William Shakespeare",
            "Edmund Spenser"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "In which year did the Spanish Armada attempt to invade England?",
        answers: [
            "1588",
            "1603",
            "1642",
            "1666"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "Who was the first person to print books using a printing press in England?",
        answers: [
            "Geoffrey Chaucer",
            "William Caxton",
            "William Shakespeare",
            "Isaac Newton"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "The English Civil War was fought between which two sides?",
        answers: [
            "England and Scotland",
            "The King and Parliament",
            "Catholics and Protestants",
            "England and France"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Who became Lord Protector after the Civil War?",
        answers: [
            "Charles I",
            "Charles II",
            "Oliver Cromwell",
            "James II"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "What happened to King Charles I in 1649?",
        answers: [
            "He died of natural causes",
            "He was executed",
            "He fled to France",
            "He abdicated"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "What major event happened in London in 1666?",
        answers: [
            "The Great Plague",
            "The Great Fire of London",
            "The Norman invasion",
            "The Civil War began"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Who designed St Paul's Cathedral?",
        answers: [
            "Christopher Wren",
            "Inigo Jones",
            "Robert Adam",
            "John Nash"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "What is the Glorious Revolution?",
        answers: [
            "The Industrial Revolution",
            "When William of Orange was invited to be king in 1688",
            "The French Revolution",
            "When Queen Victoria became monarch"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Which of the following was a famous British scientist who discovered gravity?",
        answers: [
            "Charles Darwin",
            "Isaac Newton",
            "Robert Hooke",
            "Michael Faraday"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Which dynasty began when Queen Victoria came to the throne?",
        answers: [
            "Tudor",
            "Stuart",
            "Windsor",
            "Victorian era (not a dynasty)"
        ],
        correctAnswer: 3,
        chapter: 3
    },
    {
        question: "When did the slave trade abolish throughout the British Empire?",
        answers: [
            "1776",
            "1807",
            "1833",
            "1865"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "Who was Isambard Kingdom Brunel?",
        answers: [
            "A famous engineer and builder of ships, bridges, and railways",
            "A military general",
            "A prime minister",
            "A famous author"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "Who wrote 'A Christmas Carol' and 'Oliver Twist'?",
        answers: [
            "Jane Austen",
            "Charles Dickens",
            "Charlotte Brontë",
            "Thomas Hardy"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Which famous nurse improved conditions in military hospitals during the Crimean War?",
        answers: [
            "Edith Cavell",
            "Mary Seacole",
            "Florence Nightingale",
            "Elizabeth Garrett Anderson"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "Who was the first woman to qualify as a doctor in Britain?",
        answers: [
            "Florence Nightingale",
            "Elizabeth Garrett Anderson",
            "Emmeline Pankhurst",
            "Marie Stopes"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "Who was Emmeline Pankhurst?",
        answers: [
            "A famous scientist",
            "The leader of the suffragette movement for women's right to vote",
            "A Victorian novelist",
            "Britain's first female prime minister"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "In which year did the First World War begin?",
        answers: [
            "1914",
            "1915",
            "1916",
            "1918"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "In which year did the First World War end?",
        answers: [
            "1914",
            "1916",
            "1917",
            "1918"
        ],
        correctAnswer: 3,
        chapter: 3
    },
    {
        question: "What day is Remembrance Day in the UK?",
        answers: [
            "11 November",
            "25 December",
            "5 November",
            "1 January"
        ],
        correctAnswer: 0,
        chapter: 3
    },
    {
        question: "What do people wear on Remembrance Day to remember those who died in war?",
        answers: [
            "White roses",
            "Red poppies",
            "Blue ribbons",
            "Black armbands"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "In which year did the Second World War begin?",
        answers: [
            "1937",
            "1938",
            "1939",
            "1940"
        ],
        correctAnswer: 2,
        chapter: 3
    },
    {
        question: "Who was the British Prime Minister for most of the Second World War?",
        answers: [
            "Neville Chamberlain",
            "Winston Churchill",
            "Clement Attlee",
            "Anthony Eden"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "On what date is the anniversary of the Battle of Britain now celebrated?",
        answers: [
            "15 August",
            "15 September",
            "11 November",
            "8 May"
        ],
        correctAnswer: 1,
        chapter: 3
    },
    {
        question: "What does VE Day stand for?",
        answers: [
            "Victory in Europe",
            "Victory in England",
            "Veterans in Europe",
            "Victory Ending"
        ],
        correctAnswer: 0,
        chapter: 3
    },

    // Chapter 4: A Modern, Thriving Society
    {
        question: "What languages are spoken in Wales?",
        answers: [
            "Only English",
            "English and Welsh",
            "English and Gaelic",
            "Only Welsh"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "Is the statement TRUE or FALSE? The Church of England is a Protestant Christian church and the established church in England.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        chapter: 4
    },
    {
        question: "Who is the head of the Church of England?",
        answers: [
            "The Pope",
            "The Archbishop of Canterbury",
            "The Prime Minister",
            "The monarch"
        ],
        correctAnswer: 3,
        chapter: 4
    },
    {
        question: "What is the established church in Scotland?",
        answers: [
            "The Church of England",
            "The Roman Catholic Church",
            "The Church of Scotland (Presbyterian)",
            "There is no established church in Scotland"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Which TWO of the following are public holidays in the UK?",
        answers: [
            "Christmas Day",
            "Thanksgiving",
            "Boxing Day",
            "Halloween"
        ],
        correctAnswer: [0, 2],
        chapter: 4
    },
    {
        question: "When is Christmas Day?",
        answers: [
            "24 December",
            "25 December",
            "26 December",
            "1 January"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "When is Boxing Day?",
        answers: [
            "24 December",
            "25 December",
            "26 December",
            "31 December"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "What is celebrated on 5 November?",
        answers: [
            "The end of World War II",
            "Guy Fawkes Night (Bonfire Night)",
            "The Queen's Birthday",
            "St Patrick's Day"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "When is St David's Day?",
        answers: [
            "1 March",
            "17 March",
            "23 April",
            "30 November"
        ],
        correctAnswer: 0,
        chapter: 4
    },
    {
        question: "When is St Patrick's Day?",
        answers: [
            "1 March",
            "17 March",
            "23 April",
            "30 November"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "When is St George's Day?",
        answers: [
            "1 March",
            "17 March",
            "23 April",
            "30 November"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "When is St Andrew's Day?",
        answers: [
            "1 March",
            "17 March",
            "23 April",
            "30 November"
        ],
        correctAnswer: 3,
        chapter: 4
    },
    {
        question: "Which sport is associated with Wimbledon?",
        answers: [
            "Football",
            "Cricket",
            "Tennis",
            "Rugby"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Which sporting event has the Ashes trophy?",
        answers: [
            "Football matches between England and Scotland",
            "Rugby matches between England and Wales",
            "Cricket matches between England and Australia",
            "Golf matches between UK and USA"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Where is the Grand National horse race held?",
        answers: [
            "Ascot",
            "Cheltenham",
            "Aintree",
            "Epsom"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Which of the following won the football World Cup in 1966?",
        answers: [
            "Scotland",
            "England",
            "Wales",
            "Northern Ireland"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "Who won the men's singles title at Wimbledon in 2013?",
        answers: [
            "Andy Murray",
            "Tim Henman",
            "Roger Federer",
            "Rafael Nadal"
        ],
        correctAnswer: 0,
        chapter: 4
    },
    {
        question: "Which famous British athlete won gold medals in rowing in five consecutive Olympic Games?",
        answers: [
            "Chris Hoy",
            "Steve Redgrave",
            "Mo Farah",
            "Bradley Wiggins"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "Who was the first British person to win the Tour de France?",
        answers: [
            "Chris Froome",
            "Mark Cavendish",
            "Bradley Wiggins",
            "Geraint Thomas"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Who won six Olympic gold medals at the 2012 Olympics?",
        answers: [
            "Chris Hoy",
            "Jessica Ennis-Hill",
            "Mo Farah",
            "Bradley Wiggins"
        ],
        correctAnswer: 0,
        chapter: 4
    },
    {
        question: "Which TWO sports have a 'Six Nations' championship?",
        answers: [
            "Football",
            "Rugby Union",
            "Rugby League",
            "Cricket"
        ],
        correctAnswer: [1, 2],
        chapter: 4
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            "Charlotte Brontë",
            "Jane Austen",
            "Charles Dickens",
            "Thomas Hardy"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "Who wrote the Harry Potter series?",
        answers: [
            "J.R.R. Tolkien",
            "C.S. Lewis",
            "J.K. Rowling",
            "Philip Pullman"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Who wrote 'The Lord of the Rings'?",
        answers: [
            "J.K. Rowling",
            "C.S. Lewis",
            "J.R.R. Tolkien",
            "George Orwell"
        ],
        correctAnswer: 2,
        chapter: 4
    },
    {
        question: "Which artist painted 'The Fighting Temeraire'?",
        answers: [
            "John Constable",
            "J.M.W. Turner",
            "Thomas Gainsborough",
            "David Hockney"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "Which British band was Ringo Starr part of?",
        answers: [
            "The Rolling Stones",
            "The Beatles",
            "The Who",
            "Led Zeppelin"
        ],
        correctAnswer: 1,
        chapter: 4
    },
    {
        question: "Which of the following invented the World Wide Web?",
        answers: [
            "Steve Jobs",
            "Bill Gates",
            "Tim Berners-Lee",
            "Alan Turing"
        ],
        correctAnswer: 2,
        chapter: 4
    },

    // Chapter 5: The UK Government, the Law and Your Role
    {
        question: "What type of government does the UK have?",
        answers: [
            "A republic",
            "A parliamentary democracy with a constitutional monarch",
            "An absolute monarchy",
            "A federal democracy"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Who is the head of state of the UK?",
        answers: [
            "The Prime Minister",
            "The Speaker of the House of Commons",
            "The monarch",
            "The Lord Chancellor"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "What are the TWO chambers of Parliament?",
        answers: [
            "The House of Commons",
            "The House of Representatives",
            "The House of Lords",
            "The Senate"
        ],
        correctAnswer: [0, 2],
        chapter: 5
    },
    {
        question: "How often are elections held for Members of Parliament (MPs)?",
        answers: [
            "At least every 3 years",
            "At least every 4 years",
            "At least every 5 years",
            "At least every 7 years"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "Who is eligible to vote in UK general elections?",
        answers: [
            "Everyone over 18",
            "UK, Irish and qualifying Commonwealth citizens aged 18 or over who are resident in the UK",
            "Only British citizens",
            "All EU citizens resident in the UK"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What voting system is used for general elections to the House of Commons?",
        answers: [
            "Proportional representation",
            "First past the post",
            "Single transferable vote",
            "Alternative vote"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Who forms the government?",
        answers: [
            "The monarch",
            "The House of Lords",
            "The political party with the majority of MPs in the House of Commons",
            "The party with the most votes nationwide"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "What is the role of the Prime Minister?",
        answers: [
            "To appoint members of the House of Lords",
            "To be the head of state",
            "To appoint the Cabinet and oversee government departments",
            "To make all laws"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "What is the official home of the Prime Minister?",
        answers: [
            "Buckingham Palace",
            "10 Downing Street",
            "Westminster Abbey",
            "The Houses of Parliament"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What is the Cabinet?",
        answers: [
            "A committee of senior MPs from all parties",
            "A group of about 20 senior government ministers chosen by the Prime Minister",
            "The monarch's advisors",
            "The civil service leadership"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What is the role of the Opposition?",
        answers: [
            "To oppose everything the government does",
            "To scrutinize the work of the government and propose alternative policies",
            "To help the government pass laws",
            "To represent foreign interests"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What does 'Shadow Cabinet' mean?",
        answers: [
            "The Prime Minister's secret advisors",
            "Senior members of the second largest party who 'shadow' government ministers",
            "Former Cabinet ministers",
            "Junior ministers in training"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Where does the UK Parliament meet?",
        answers: [
            "Buckingham Palace",
            "The Palace of Westminster",
            "Westminster Abbey",
            "The Tower of London"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What is a by-election?",
        answers: [
            "An election for local councils",
            "An election held between general elections when an MP dies or resigns",
            "A referendum",
            "An election for the European Parliament"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Scotland, Wales and Northern Ireland have their own parliaments or assemblies with power to legislate on certain matters. What is this system called?",
        answers: [
            "Federation",
            "Independence",
            "Devolution",
            "Confederation"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "Who chairs debates in the House of Commons?",
        answers: [
            "The Prime Minister",
            "The Speaker",
            "The Lord Chancellor",
            "The monarch"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Can MPs belong to any political party or be independent?",
        answers: [
            "No, they must belong to a political party",
            "Yes",
            "Only in Scotland and Wales",
            "Only if they were independent when elected"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "At what age can you serve on a jury?",
        answers: [
            "16 to 70",
            "18 to 70",
            "21 to 65",
            "18 to 75"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Is the statement TRUE or FALSE? All serious criminal cases are heard in a Magistrates' Court.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Where are serious criminal cases heard?",
        answers: [
            "Magistrates' Court",
            "Crown Court",
            "County Court",
            "High Court"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What is the role of the police in the UK?",
        answers: [
            "To protect life and property, prevent disturbances, and prevent and detect crime",
            "Only to arrest criminals",
            "To enforce government policy",
            "To collect taxes"
        ],
        correctAnswer: 0,
        chapter: 5
    },
    {
        question: "Is the statement TRUE or FALSE? The police must obey the law just like everyone else.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        chapter: 5
    },
    {
        question: "At what age can you drive a car or motor cycle in the UK?",
        answers: [
            "16",
            "17",
            "18",
            "21"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "What is the minimum age to buy alcohol in the UK?",
        answers: [
            "16",
            "17",
            "18",
            "21"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "From what age can you buy cigarettes in the UK?",
        answers: [
            "16",
            "17",
            "18",
            "21"
        ],
        correctAnswer: 2,
        chapter: 5
    },
    {
        question: "What is the National Citizen Service programme for?",
        answers: [
            "Training police officers",
            "16 and 17-year-olds to enjoy outdoor activities, develop skills and take part in a community project",
            "Teaching citizenship to immigrants",
            "Apprenticeships in the civil service"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "From what age can you stand for public office in the UK?",
        answers: [
            "16",
            "18",
            "21",
            "25"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Which of these is a responsibility of British citizens and permanent residents?",
        answers: [
            "To own property",
            "To obey and respect the law",
            "To join the armed forces",
            "To learn to speak Welsh"
        ],
        correctAnswer: 1,
        chapter: 5
    },
    {
        question: "Is the statement TRUE or FALSE? You must treat others with fairness and respect other people even if they have different backgrounds and beliefs.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        chapter: 5
    },
    {
        question: "What is the emergency services telephone number?",
        answers: [
            "999",
            "911",
            "112",
            "Both 999 and 112"
        ],
        correctAnswer: 3,
        chapter: 5
    }
];
