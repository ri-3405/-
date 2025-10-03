function searchRecipes() {
    // 選択された材料を取得
    const selected = Array.from(document.querySelectorAll(".ingredients input:checked"))
      .map(i => i.value);
  
    if (selected.length < 2) {
      alert("2つ以上の材料を選んでください。");
      return;
    }
  
    // 全レシピを一旦非表示
    const recipes = document.querySelectorAll(".recipe");
    recipes.forEach(r => r.style.display = "none");
  
    let found = 0;
    recipes.forEach(r => {
      const ingredients = r.getAttribute("data-ingredients").split(",");
      // 全ての選択材料が含まれているか判定
      const match = selected.every(s => ingredients.includes(s));
      if (match) {
        r.style.display = "block"; // 条件一致したものだけ表示
        found++;
      }
    });
  
    if (found === 0) {
      alert("該当するレシピがありません。");
    }
  }
  