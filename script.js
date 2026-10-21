document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calc-btn');
    const blockCountInput = document.getElementById('block-count');
    const resultArea = document.getElementById('result-area');
    const resultList = document.getElementById('result-list');

    calcBtn.addEventListener('click', () => {
        // 入力値の取得
        const n = parseInt(blockCountInput.value, 10);

        // リセット
        resultList.innerHTML = '';
        resultArea.classList.add('hidden');

        // バリデーション（2マス以上必要）
        if (isNaN(n) || n < 2) {
            alert('2以上の整数を入力してください。');
            return;
        }

        // 両端に置くため、間の距離は (総マス数 - 1) となる
        const distance = n - 1;
        const patterns = [];

        // 距離の約数をすべて求める（等間隔になる数値）
        for (let i = 1; i <= distance; i++) {
            if (distance % i === 0) {
                patterns.push(i);
            }
        }

        // 結果をHTMLに生成
        patterns.forEach(interval => {
            const torchCount = (distance / interval) + 1;
            const emptySpaces = interval - 1; // 松明と松明の間の空きブロック数

            const li = document.createElement('li');

            const title = document.createElement('div');
            title.className = 'interval-title';
            title.textContent = `${interval}マス間隔 (必要な松明: ${torchCount}本)`;

            const detail = document.createElement('div');
            detail.className = 'detail';
            detail.textContent = `松明の間の空きスペース: ${emptySpaces}マス`;

            li.appendChild(title);
            li.appendChild(detail);
            resultList.appendChild(li);
        });

        // 結果エリアを表示
        resultArea.classList.remove('hidden');
    });
});