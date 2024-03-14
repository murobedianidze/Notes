import React, { useState } from 'react';
import styles from "../aboutme/About.module.css" 

const AboutMe = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const divs = [
    <div key={1} className={styles.about_me}>
      <h2>თავი 1</h2>
      {<p className={styles.about_description}>მინდა,რომ ძალიან ბევრი ვისაუბრო, მაგრამ არმიყვარს ჩემთავზე საუბარი,არც  ადამიანებთან და როგორც ჩანს არც ჩანახატებში. კიდევ ერთი უინტერესო დღე, 9 ნოემბერი 2022 წლის. ზუსტად 7 თვე არის სამსახურს თავი დავანებე და იმის შემდეგ, ძალიან შეიცვალა ჩემი ცხოვრება, ყოველი დღე ერთმანეთს დაემსგავსა,რაც ძალიან არმწომწონს,რადგან ვინც მიცნობს ყველამ იცის,რომ ერთფეროვნება არმიყვარს. სწორედ ეს არის პერიოდი,როდესაც ჩემი თავის საუკეთესო ვერსია გავხდი, ფინანსურად ვიყავი იმდენად იდეალურად,რომ რისი სურვილიც გამიჩნდებოდა, დაუფიქრებლად ვყიდულობდი. თუმცა ძალიან კარგი მოგონებები დამრჩა. ადამიანი ვიყავი,რომელიც ფიქრობდა იმ ფაქტზე,რომ შეიძლება მეორე დღეს ვეღარ გაიღვიძო და რისი სურვილიც გექნება ყველაფერი უნდა გააკეთო. შეიძლება ითქვას,რომ ისევ ისეთი ვარ,თუმცა დღესდღეობით მაქვს მომენტები,როცა მომავალზე ფიქრი მაწვება და არვიცი რაუნდა ვქნა და ან რაიქნება მომავალში. ალბათ ეს ყველაფერი იმიტომ ხდება,რომ ვიზრდები ნელნელა და უფრო მეტად ვაქცევ ყურადღებას ისეთ საკითხებს როგორიცაა: მომავალი,ოჯახი, ბავშვი და კიდევ მრავალი. მომავალი ამ ყველაფერს მოიაზრებს, მაგრამ მაინც დავაკონკრეტე</p>}
    </div>,
    <div key={2} className={styles.about_me}>
      <h2>თავი 2</h2>
      {<p className={styles.about_description}>
      უჩვეულო ჩანახატში ბოლო ცვლილების შემდეგ გასულია 2 თვე. დღეს არის 17 იანვარი და შეგრძნება მაქვს ისეთი,რომ საერთოდ სხვა მურო ბედიანიძე წერს გაგრძელებას,დავიწყოთ იქიდან,რომ  ამ 2 თვეში ძალიან ბევრი ცვლილება იყო ჩემს ცხოვრებაში.პირველრიგში დავიწყე ჩემით სწავლა Front-end-development ის,რომელიც ძალიან დიდხანს მაინტერესებდა,ერთი პერიოდი უნივერსიტეტიდან გადასვლას ვფიქრობდი,თუმცა ვიფიქრე ფინანსების განხრითაც მქონოდა დიპლომი. იმის შემდეგ,რაც გადავდგი ეს ნაბიჯი და ჩემი ინტერესის სფეროს შესწავლა დავიწყე მივხვდი,რომ ძალიან მონდომებული ვიყავი,თუმცა მერჩივნა ეს სწავლა ვალდებულებად მექცია და 11 იანვარს დავიწყე პროგრამირების კურსი,რომელიც ძალიან მომწონს.  ვფიქრობ,რომ ჩემი თავის მოტივაცია და შემართება ამ საქმეში ვიპოვნე და არვაპირებ დანებებას. ყოველთვის ვიძახი,რომ შრომა ფასდება და ძალიან დიდ იმედს ვიტოვებ,რომ ეს ჩემი შემართება,მოტივაცია და ამ საქმისადმი შრომისმოყვარეობა დამიფასდება. ამ ყველაფრისთის გარკვეული შეზღუდვები დავუწესე ჩემთავს და რაღაც საკითხები უკან დავხიე ჩემს ცხოვრებაში. ჩემი აზრით სჯობს,რომ ეს პერიოდი გამოვიყენო ჩემი თავის განვითარებისთვის. დაზეპირება არჭირდება ამ სფეროს, სულ ვცდილობ,რომ ვივარჯიშო და ნასწავლი კოდები პრაქტიკაში გამოვიყენო და შევქმნა რაიმე რენდომ საიტი.ეს ყველაფერი მეხმარება იმაში,რომ გავიგო ყველაფერი და გავიაზრო. ასევე თამამად შემიძლია ვთქვა,რომ ჩემი ყოფილის კვალი ჩემს ცხოვრებაში საერთოდ გაქრა და ვფიქრობ,ერთ-ერთი ფაქტორი ესეც არის,რომ ფსიქოლოგიურად დავლაგდი. ამ შემართებით და მოტივაციით თუ გავაგრძელე ის ყველაფერი,რაც ჩანაფიქრი მაქვს  ალბათ მურო ბედიანიძის საუკეთესო ვერსია გავხდები ისევ.</p>}
      {<p className={styles.about_description}>
      მოკლედ დღეს არის 21 იანვარი.ვერ ვიტყვი,რომ ცუდი დღე მქონდა. უნდა ავღნიშნო,რომ  კიდევ ერთი გათენებული ღამის შემდეგ,საკმაოდ დამღლელი დღე მქონდა. ჩემი დასახული მიზნებისთვის ბრძოლაში გავლიე ეს დღეც და ჩემი აზრით ეს შრომა,მოტივაცია და მონდომება არ უნდა ჩამეყაროს წყალში.დაბადებისდღეზე ვარ ახლა თუმცა სურვილი გამიჩნდა,რომ უფრო მეტად გადმოვცე ჩემი შინაგანი მდგომარეობა და დავანახო მუროს,რომ თურმე ცხოვრების გაგრძელება შესაძლებელია და ხელი არუნდა ჩაიქნიოს არაფერზე. ასევე მინდა რო ამ ჩანახატის მკითხველმაც დაინახოს,რომ გადაუჭრელი პრობლემა არ არსებობს.ჩვენს შინაგან მდგომარეობაზე არის დამოკიდებული ყველაფერი და როდესაც მივხვდებით, რომ ჩვენ თავს სწორი მიმართულებით ვუშვებთ,ხელი არუნდა შევუშალოთ და მივცეთ უფლება,რომ გამოცადოს ეს გზაც.ძალიან კარგი გეგმები გვაქვს სამეგობროს და რატომღაც, გული მიგრძნობს,რომ ეს ყველაფერი ერთ-ერთი საუკეთესო მიმართულება იქნება ჩემს ცხოვრებაში.ვინც მიცნობს გაუკვირდება ჩემი საუბარი,რადგან 1 წლის წინ საერთოდ სხვა ადამიანი ვიყავი ამ საკითხში. ცხოვრებაზე ხელი ჩავიქნიე და მეგონა,რომ არაფერი აღარ გამოვიდოდა ამ ცხოვრებაში. მაგრამ  ყველას ცხოვრებაში არის გარდამტეხი მომენტი და მეც ეგ მომენტი მქონდა და საერთოდ შევიცვალე დამოკიდებულება ბევრ საკითხთან დაკავშირებით. 2022 წლისგან განსხვავებით ახლა გადავწყვიტე,რომ 2023 წელი დავუთმო ჩემი თავის განვითარებას ბოლომდე და საერთოდ სხვა ადამიანი გავხდები.მივხვდი,რომ წარსული უბრალოდ მოგონებებია,რომელიც ტკბილად უნდა გავიხსენო.დანარჩენი,რამაც შეიძლება ჩემს ფსიქოლოგიურ მდგომარეობას ავნოს უნდა დავიკიდო და არმივაქციო ყურადღება.</p>}
      {<p className={styles.about_description}>
      შეიძლება ადამიანს ძალიან უინტერესო მოეჩვენოს ეს ჩანახატი,რადგან უამრავ თემაზე გადახტომა არის და ძალიან ბევრ რამეს კითხულობ, თუმცა ამ მინიმალისტური ისტორიებით იქმნება ერთი დიდი ისტორია,რომელსაც მურო ბედიანიძის ცხოვრება ჰქვია.  ვფიქრობდი და ეს ყველაფერი მხოლოდ მოკლე ისტორიაა. ნელნელა დავიწყებ თითოეული ადამიანის დახასიათებას და ჩვენი მოგონებების დაწერას და იმედი მაქვს,რომ ოდესმე თუ ვინმე ამას წაიკითხავს ესიამოვნება.ბოლო ცვლილების შემდეგ დიდი დრო არის გასული და თამამად შემიძლია ვთქვა,რომ  საკუთარ თავთან ბრძოლა მოვიგე და Overthinking დავასრულე, შეიძლება ბოლომდე ვერ ქრებოდეს ეგ ყველაფერი, თუმცა მომავალზე ფიქრს აღარ ვაძლევ საშუალებას,რომ აწმყოში ბედნიერების მიღებაში შემიშალოს ხელი. ძალიან კარგად გავიაზრე ის ფაქტი,რომ როგორც მომავალზე არღირს ბევრი ფიქრი ასევეა წარსული. მივედი იმ დასკვნამდე,რომ აზრი არ აქვს წარსულში ჩადენილი შეცდომის გამო საკუთარ თავს არ აძლევდე საშუალებას მიიღოს ყოველი წამით მუხტი და ბედნიერება. საკუთარ თავთან ვაღიარე, რომ თუ  წარსულში არის ისეთი ფაქტი მომხდარი,რომელსაც ვეღარ შევცვლი  აზრი აღარ აქვს ამ ფაქტზე  ბევრ ფიქრს და თავის ტანჯვას, ხოლო თუ ეს შეცდომა გამოსწორებადია მითუმეტეს არღირს ბევრი ფიქრი და საკუთარი თავის ტანჯვა. ძალიან დიდი ხანი ვებრძოდი ჩემ თავს იმიტომ,რომ წარსულსა და მომავალს შორის ვიყავი გაჩერებული და მიჭირდა აწყმოში დაბრუნება, შეიძლება ადამიანის გვერდით ვყოფილიყავი თუმცა  ფიქრებით სულ სხვა ადგილას ან თუნდაც სხვა სამყაროში ვიყავი. მაგრამ როგორც ყოველთვის მეუბნებოდნენ საკუთარ თავს მხოლოდ ჩვენ ვშველით, იმის მიუხედავად,რომ ექიმის დანიშნულებით წამლებს ვსვამ დამამშვიდებლებს, მაინც ჩემთავს მეთვითონ ვუშველე და მივახვედრე,რომ ძალიან ცუდად მოქმედებდა ეს ყველაფერი მურო ბედიანიძეზე.  ვიცოდი,რომ ასე გაგრძელება არ შეიძლებოდა,რადგან ბოლო პერიოდში ძალიან შევიცვალე, ხანდახან მეგონა,რომ სულ სხვა ადამიანი ვიყავი, თუმცა ვფიქრობ,რომ ყველაფერი უნდა მომხდარიყო ამ ცხოვრებაში, რათა დღესდღეობით ჩემითავის საუკეთესო თუარა ერთ-ერთი ყველაზე კარგი ვერსია ვყოფილიყავი</p>}
    </div>,
    <div key={3} className={styles.about_me}>
      <h2>თავი 3</h2>
      {<p className={styles.about_description}>უფრო და უფრო ვხვდები რომ ეს ცხოვრება სავსეა სხვადასხვა სახის სიურპრიზებით. ისეთი რამ გამოცვადე ამ ბოლო დროს ბევრი ადამიანისგან,რომ მეც არვიცი რა დავარქვა. სიმართლე როვთქვა მგონია,რომ ამ ადამიანებმა უბრალოდ გაიაზრეს  ის ფაქტი თუ რამდენად კარგი ადამიანი დაკარგეს ჩემი სახით და დააფასეს მათთან ერთად გატარებული დრო. სცადეს ჩემთან ემოციური თამაშიც,რაც ნამდვილად გამოუვიდათ თავიდან, თუმცა ოვერსინქინგის დასრულების გამო, არდამიწყია ბევრი ფიქრი იმ საკითხზე,რომ დამნაშავე ვარ ან რაიმეს გამოსწორება არის შესაძლებელი. რა თქმა უნდა  დავფიქრდი,რომ არ არსებობს ადამიანი ვისაც შენი სიბრაზე და ნერვების მოშლა უნდა აჩვენო,რადგან არცერთი ადამიანი არ იმსახურებს იმის ნახვას,რომ მათ შენი გაბრაზება მოახერხეს.</p>}
      {<p className={styles.about_description}>
      ალბათ 1 თვე გავიდა ბოლო ცვლილებიდან და რა თქმა უნდა კიდევ ბევრი რამ მოხდა ჩემს ცხოვრებაში. უფრო მეტად ვცდილობ საკუთარი თავის განვითარებას. დღესდღეობით არ შემიძლია იმის თქმა,რომ ჩემი თავის საუკეთესო ვერსია ვარ,თუმცა ვთვლი,რომ ამჟამად ერთერთი ყველაზე კარგი ვერსია ვარ იმასთან შედარებით რაც ვიყავი. ბევრი რამ გადავხარშე ისე როგორც საჭირო იყო და იმ მოგონებებთან ერთად ვცხოვრობ რომლებიც ერთ დროს ძალიან კარგი იყო,თუმცა ახლა არც ისე კარგად მახსენდება.ეს ყველაფერი არნიშნავს იმას,რომ ვნანობ მათთან ურთიერთობას ან იმ გატარებულ წუთებს. უბრალოდ დავიკიდე ეს ხალხი ძალიან ჩვეულებრივად. ზუსტად ვიცი და გავიაზრე,რომ წასასვლელი უნდა წავიდეს და ვინც საჭიროა ის ყოველთვის ჩემს გვერდით იქნება.  ადამიანებს ჰგონიათ,რომ ყოველდღიური მიმოწერით განისაზღვრება მეგობრობა და ძმაკაცობა, არა რა თქმა უნდა არ აქვს მნიშვნელობა. უბრალოდ ადამიანისგან უნდა დაინახო ინიციატივა საუბრის წამოწყების და შენთან მოწერის. ძალიან ბევრი ადამიანი დავკარგე  ამ მიზეზით,რადგან მხოლოდ ჩემი ინიციატივით იწყებოდა დიალოგი,შეიძლება არიყოს გამაღიზიანებელი ვინმესთვის,მაგრამ მე ასეთ ადამიანთან ურთიერთობა მბეზრდება და ვწყვეტ.
</p>}
{<p className={styles.about_description}>
არსებობს კიდევ ერთი საკითხი,რომელიც ყველას ცხოვრებაში უმნიშვნელოვანესია. ვფიქრობ,რომ ჯერ ადრეა სერიოზული ურთიერთობების დაწყების და ზედმეტი პასუხისმგებლობის აღებისათვის. ზოგადად ყველა ადამიანი ვინც მიცნობს იცის,რომ ქალბატონებს ძალიან დიდ პატივს ვცემ. არ დავიწყებ იმის ახსნებს თუ რით გამოვხატავ ამ ყველაფერს, რადგან მხოლოდ საუბარი არაფერია მთავარია მასთან ერთად შენმა ქცევამ აჩვენოს და გამოხატოს შენი გრძნობები. ჩემი აზრით ჯერ ვერ აფასებენ ამ თვისებას ჩემში,მაგრამ გამოჩნდება ის ადამიანი ჩემს ცხოვრებაში ვინც ამ ყველაფერს დააფასებს და დამიჯერეთ უბედნიერესი ადამიანი იქნება. ამ თემაზე საუბარი არნიშნავს იმას,რომ გული მწყდება ან სიყვარულს ვეძებ,არა სიყვარულს ძებნა არსჭირდება თავისით შემოვა ჩვენს ცხოვრებაში.შეიძლება ადამიანი ისე შეგიყვარდეს ვერც კი მოასწრო გააზრება. უბრალოდ არის ხშირად მომენტი როცა გაურკვევლობაში ხარ. ადამიანებმა ბევრი ნერვიულობის და დეპრესიების გარეშე უნდა ვისწავლოთ ცხოვრებიდან მეგობრებისა და გოგოების გაშვება. ის ადამიანები, რომლებიც ვერ გვაფასებენ და არ იმსახურებენ ჩვენთან ურთიერთობას.</p>}
    </div>,
    <div key={4} className={styles.about_me}>
      <h2>თავი 4</h2>
      {<p className={styles.about_description}>ბოლო ცვლილებიდან გასული არის ძალიან დიდი ხანი, მინიმუმ 6 თვე.  დღევანდელი გადმოსახედიდან ჩემ გავლილ წლებთან შედარებით საერთოდ სხვა ადამიანი ვარ. საკუთარ თავთან საერთოდ ყველაფერი დავალაგე და საკუთარ ქვეცნობიერთან ჰარმონიაში ვარ, რაც ძალიან მახარებს. ამჟამად საერთოდ სხვა ფიქრები მაქვს და ეს ყველაფერი მოიაზრებს იმას, რომ ისევ საკუთარი თავის განვითარეაბს ვუთმობ დროს 2024 წელს. ფიტნესი და ძილის რეჟიმის დალაგება,რაც წონის მომატებაში და კარგი ფორმის მიღებაში დამეხმარება. ასევე ვთვლი,რომ შესაძლებელია ამჟამად კარიერულად არეული ვარ და ბევრი რამ ხდება, თუმცა აუცილებლად დალაგდება ყველაფერი. მხოლოდ დეველოპერობით არ განისაზღვრება ყველაფერი. თუ შევძელი და ამ სფეროთი დავიწყე მუშაობა ძალიან გამიხარდება, რადგან საკმაოდ ბევრი რესურსი ჩავდე ამ ყველაფრის შესწავლაში, თუმცა თუ არ დავიწყე ამ სფეროთი მუშაობა, არასდროს ვინანებ ამ ყველაფერს. პირველ რიგში იმიტომ,რომ ჩემი ინტერესის სფერო იყო ყოველთვის და შევძელი,რომ ეს ყველაფერი შემესწავლა და საკუთარი პროექტები გამეკეთებინა. მეორე მიზეზი რის გამოც არასდროს ვინანებ არის ის,რომ ყველაზე რთულ პერიოდში გადავწყვიტე ამ ყველაფრის შესწავლა და რაღაც მხრივ ეს ყველაფერიც დამეხმარა,რომ სხვა ადამიანი გავმხდარიყავი. 17 დეკემბერი არის დღეს ერთი ჩვეულებრივი საღამო და ვფიქრობ,რომ ძალიან ცოტა დრო რჩება იქამდე სანამ საკუთარ თავს გარდავსახავ სხვა ადამიანად, რა თქმა უნდა  ცვლილება პიროვნულობაზე არ აისახება და ხასიათზე, უბრალოდ ეს ყველაფერი საკუთარი თავის განვითარებისთვის არის საჭირო.  რაც შეეხება ჩემს დიდიხნის წინანდელ დამოკიდებულებას შეიცვალა. არ ვიტყვი, რომ სრულად შევცვალე ეგ დამოკიდებულება, მაგრამ რაც გავიზარდე, უფრო მეტად ვხვდები,რომ მომავალზე ფიქრი საჭიროა. დღესდღეობით სულ ვცდილობ,რომ სამსახური ვიშოვნო და ჩემს მომავალზე ზრუნვა დავიწყო. წარსულში ბევრად განსხვავებული ვიყავი. მხოლოდ აწმყო მაინტერესებდა და  შემეძლო ერთ დღეში დამეხარჯა მთელი ფული, რაც მქონდა. ამ ყველაფრის შეცვლაც ვფიქრობ,რომ საბოლოოდ კარგად აისახება ჩემს მომავალზე.  ყოველთვის მივიწევ იმისაკენ,რომ საკუთარი თავის საუკეთესო ვერსია გავხდე და ვფიქრობ რომ უკვე გავიმარჯვე. არა იმაში,რომ ვინმეზე მაგარი ვარ ან საუკეთესო ვარ, არა უბრალოდ მე წარსულ მურო ბედიანიძეზე ბევრად მაღლა ვდგავარ და მას მოვუგე ეს ბრძოლა</p>}
    </div>,
  ];

  const divsPerPage = 2;
  const totalPages = Math.ceil(divs.length / divsPerPage);
  const startIndex = (currentPage - 1) * divsPerPage;
  const endIndex = startIndex + divsPerPage;

  const currentDivs = divs.slice(startIndex, endIndex);

  return (
    <div>
      {currentDivs.map((div, index) => (
        <div key={index} className="content">
          {div}
        </div>
      ))}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
