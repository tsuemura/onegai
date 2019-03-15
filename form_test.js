Feature('Yahoo!きっず')

Scenario('検索できる', async (I) => {  
  I.amOnPage('https://kids.yahoo.co.jp')
  I.fillField('調べたいことばをいれてみよう！', 'ねこ')
  I.click('さがす', '.Search__form')
  I.see('ネコ - Wikipedia')
  I.appendField('調べたいことばを入れてみよう！', '　買い方')
  I.click('さがす', '.Search__form')
  I.see('さがしているのは')
  I.click('猫の飼い方')
  I.seeInField('調べたいことばを入れてみよう！', '猫の飼い方')
})