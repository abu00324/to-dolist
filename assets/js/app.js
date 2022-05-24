// 追加ボタンがクリックされた時
$('#add').click(function () {
    // 入力欄を取得
    let inputTask = $('#task')
    // console.log('inputTask')
    // 入力値を取得
    let task = inputTask.val();
    // console.log(task)

    // 入力値が空かチェック
    if (task === '') {
        // 入力値が空の場合、処理を中断
        return;
    }

    // liタグを作成
    let li = $('<li>');

    // liに入力値を設定
    li.text(task);

    // divの作成
    let buttons = $('<div>');
    buttons.addClass('buttons');
    console.log(buttons);

    // buttonの作成
    // 削除ボタン
    let remove = $('<button>');
    remove.addClass('remove');
    remove.text('削除')

    // 削除ボタンがクリックされた時の処理
    remove.click(removeTask);

    // 完了ボタン
    let done = $('<button>');
    done.addClass('done');
    done.text('完了');

    // 完了ボタンがクリックされた時の処理
    done.click(doneTask);

    // divにボタンを追加
    buttons.append(remove);
    buttons.append(done);

    // liにdivを追加
    li.append(buttons);

    // notyetのulにliを追加 prepend上から順に表示
    $('#not-yet').prepend(li);

    // 入力値をリセット
    inputTask.val('');
});

// タスクを削除
function removeTask() {
    if (!confirm('are you sure?')) {
        return;
    }
    let task = $(this).closest('li');
    task.remove();
}

// タスクを完了する
function doneTask() {
    // 移動させるliを取得
    let task = $(this).closest('li');


    // liの親であるulのidを取得する
    let id = task.parent().attr('id');
    // console.log(id);
    // doneのタスクの場合
    if (id == 'done') {
        return;
    }

    // タスクを移動

    $('#done').append(task);
}