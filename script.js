// Supabaseにつなぐ
const SUPABASE_URL = "https://ulpjwwnbiprwtktywryc.supabase.co";
const SUPABASE_KEY = "sb_publishable_lMwYXRJrJJZOC3mIjfFX4g_e54O3XIY";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// 部品を見つける
const authArea = document.getElementById("authArea");
const appArea = document.getElementById("appArea");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signupButton = document.getElementById("signupButton");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const userInfo = document.getElementById("userInfo");
const taskinput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const tasklist = document.getElementById("tasklist");
const nicknameArea = document.getElementById("nicknameArea");
const nicknameInput = document.getElementById("nicknameInput");
const nicknameButton = document.getElementById("nicknameButton");
const everyoneArea = document.getElementById("everyoneArea");
const categorySelect = document.getElementById("categorySelect");
const privateCheck = document.getElementById("privateCheck");
const dateInput = document.getElementById("dateInput");
const prevDay = document.getElementById("prevDay");
const nextDay = document.getElementById("nextDay");
const inviteButton = document.getElementById("inviteButton");
const friendsTab = document.getElementById("friendsTab");
const everyoneTab = document.getElementById("everyoneTab");
const dailyTab = document.getElementById("dailyTab");
const wishTab = document.getElementById("wishTab");
const dailyArea = document.getElementById("dailyArea");
const wishArea = document.getElementById("wishArea");
const wishInput = document.getElementById("wishInput");
const wishButton = document.getElementById("wishButton");
const wishList = document.getElementById("wishList");
const groupTab = document.getElementById("groupTab");
const groupArea = document.getElementById("groupArea");
const groupNameInput = document.getElementById("groupNameInput");
const createGroupButton = document.getElementById("createGroupButton");
const noGroupMessage = document.getElementById("noGroupMessage");
const groupContent = document.getElementById("groupContent");
const groupSelect = document.getElementById("groupSelect");
const groupMembers = document.getElementById("groupMembers");
const groupInviteButton = document.getElementById("groupInviteButton");
const leaveGroupButton = document.getElementById("leaveGroupButton");
const groupWishInput = document.getElementById("groupWishInput");
const groupWishButton = document.getElementById("groupWishButton");
const groupWishList = document.getElementById("groupWishList");
const doneMenu = document.getElementById("doneMenu");
const doneMenuTitle = document.getElementById("doneMenuTitle");
const donePhotoButton = document.getElementById("donePhotoButton");
const doneNoPhotoButton = document.getElementById("doneNoPhotoButton");
const doneCancelButton = document.getElementById("doneCancelButton");
const cameraArea = document.getElementById("cameraArea");
const cameraVideo = document.getElementById("cameraVideo");
const cameraCancel = document.getElementById("cameraCancel");
const cameraShutter = document.getElementById("cameraShutter");
const cameraFlip = document.getElementById("cameraFlip");
const photoViewer = document.getElementById("photoViewer");
const viewerInfo = document.getElementById("viewerInfo");
const viewerClose = document.getElementById("viewerClose");
const viewerImage = document.getElementById("viewerImage");
const viewerCaption = document.getElementById("viewerCaption");
const reactionMenu = document.getElementById("reactionMenu");
const reactionTitle = document.getElementById("reactionTitle");
const reactionEmojis = document.getElementById("reactionEmojis");
const reactionSelfie = document.getElementById("reactionSelfie");
const reactionCheer = document.getElementById("reactionCheer");
const reactionRemove = document.getElementById("reactionRemove");
const reactionCancel = document.getElementById("reactionCancel");
const viewerReactions = document.getElementById("viewerReactions");
const viewerSelfie = document.getElementById("viewerSelfie");
const reactionPicker = document.getElementById("reactionPicker");
const mineTab = document.getElementById("mineTab");
const bellButton = document.getElementById("bellButton");
const bellBadge = document.getElementById("bellBadge");
const notificationPanel = document.getElementById("notificationPanel");
const notificationSettingsButton = document.getElementById("notificationSettingsButton");
const notificationList = document.getElementById("notificationList");
const notificationClose = document.getElementById("notificationClose");
const settingsPanel = document.getElementById("settingsPanel");
const setFirstTask = document.getElementById("setFirstTask");
const setReactions = document.getElementById("setReactions");
const setWishes = document.getElementById("setWishes");
const setGroups = document.getElementById("setGroups");
const levelChecks = document.getElementById("levelChecks");
const settingsSave = document.getElementById("settingsSave");
const settingsCancel = document.getElementById("settingsCancel");
const toast = document.getElementById("toast");
const bottleArea = document.getElementById("bottleArea");
const bottleChoices = document.getElementById("bottleChoices");
const bottleButton = document.getElementById("bottleButton");
const mypageTab = document.getElementById("mypageTab");
const mypageArea = document.getElementById("mypageArea");
const homeView = document.getElementById("homeView");
const mineView = document.getElementById("mineView");
const homeDate = document.getElementById("homeDate");
const myBottleCard = document.getElementById("myBottleCard");
const myBottleBody = document.getElementById("myBottleBody");
const myBottleCount = document.getElementById("myBottleCount");
const myBottlePending = document.getElementById("myBottlePending");
const backHome = document.getElementById("backHome");

// カテゴリーごとの液体の色
const CATEGORY_COLORS = {
    "勉強": "#F6BFCB",
    "趣味": "#D3C2F4",
    "バイト": "#F8DCA6",
    "家事": "#BFE6CC",
    "運動": "#B3DBF6",
    "その他": "#EADCCB"
};

let myBottleColor = "rose";

// ボトルの色の一覧（key は保存する名前、line は線の色、glass はガラスの色）
const BOTTLE_COLORS = [
    { key: "rose", name: "ローズ", line: "#eeb4d8", glass: "#FFF6F7" },
    { key: "lavender", name: "ラベンダー", line: "#d1adee", glass: "#F7F4FF" },
    { key: "mint", name: "ミント", line: "#8FCFAE", glass: "#F2FBF6" },
    { key: "sky", name: "マリン", line: "#8EC3E8", glass: "#F1F8FD" },
    { key: "honey", name: "ハニー", line: "#E5BE6A", glass: "#FFF9EC" },
    { key: "clear", name: "クリア", line: "#C9C2C3", glass: "#FFFFFF" }
];
const shelfArea = document.getElementById("shelfArea");
const friendListView = document.getElementById("friendListView");
const backHomeFromFriends = document.getElementById("backHomeFromFriends");
const fullMessage = document.getElementById("fullMessage");
const settingsOpen = document.getElementById("settingsOpen");
const settingsArea = document.getElementById("settingsArea");
const settingsBack = document.getElementById("settingsBack");
const openNotificationSettings = document.getElementById("openNotificationSettings");
const myPageBottle = document.getElementById("myPageBottle");
const myStats = document.getElementById("myStats");
const myCodeText = document.getElementById("myCodeText");
const pastBottles = document.getElementById("pastBottles");
const pastEmpty = document.getElementById("pastEmpty");
const customizeOpen = document.getElementById("customizeOpen");
const customizeArea = document.getElementById("customizeArea");
const customizeBack = document.getElementById("customizeBack");
const customizePreview = document.getElementById("customizePreview");
const colorChoices = document.getElementById("colorChoices");
const bgChoices = document.getElementById("bgChoices");
const cardChoices = document.getElementById("cardChoices");

// 背景の色
const PAGE_COLORS = [
  { key: "white", name: "しろ", color: "#FFFFFF" },
  { key: "pink", name: "ピンク", color: "#FDE6EA" },
  { key: "lavender", name: "ラベンダー", color: "#EFE9FB" },
  { key: "mint", name: "ミント", color: "#E7F5EE" },
  { key: "cream", name: "クリーム", color: "#FFF6E3" }
];

// まとまりの枠の色
const CARD_COLORS = [
  { key: "pink", name: "ピンク", color: "#FFF1F3" },
  { key: "lavender", name: "ラベンダー", color: "#F3EFFC" },
  { key: "mint", name: "ミント", color: "#ECF7F1" },
  { key: "cream", name: "クリーム", color: "#FFF7E8" },
  { key: "white", name: "しろ", color: "#FFFFFF" }
];

const appTitle = document.getElementById("appTitle");
const friendPageView = document.getElementById("friendPageView");
const backFromFriendPage = document.getElementById("backFromFriendPage");
const friendPageBottle = document.getElementById("friendPageBottle");
const friendName = document.getElementById("friendName");
const friendStats = document.getElementById("friendStats");
const friendTodayList = document.getElementById("friendTodayList");
const friendWishList = document.getElementById("friendWishList");
const friendPhotos = document.getElementById("friendPhotos");
const collectionOpen = document.getElementById("collectionOpen");
const collectionArea = document.getElementById("collectionArea");
const collectionBack = document.getElementById("collectionBack");
const themeTabs = document.getElementById("themeTabs");
const chooseThemeButton = document.getElementById("chooseThemeButton");
const collectionList = document.getElementById("collectionList");
const slotTabs = document.getElementById("slotTabs");
const slotItems = document.getElementById("slotItems");

// かざりをつける場所
const SLOTS = [
  { key: "cap", name: "キャップ" },
  { key: "necklace", name: "首かざり" },
  { key: "lame", name: "ラメ" },
  { key: "charm", name: "チャーム" },
  { key: "lace", name: "レース" }
];

// ラメの粒の位置（左から何%、上から何%）
const LAME_SPOTS = [[25, 30], [70, 45], [40, 65], [78, 78], [30, 85]];

let myDeco = {};          // 自分がつけているかざり
let currentSlot = "cap";  // カスタムで選んでいる場所
// かざりのテーマ
const DECO_THEMES = [
  { key: "cute", name: "かわいい", desc: "リボンやハート" },
  { key: "cool", name: "かっこいい", desc: "メタルやチェーン" },
  { key: "natural", name: "ナチュラル", desc: "葉っぱや木の実" }
];
const STEPS = [5, 15, 30];

let decorations = []; // かざりの一覧
let ownedIds = [];    // 持っているかざりのID
let decoTheme = "cute"; // 今のテーマ
let viewTheme = "cute"; // 「かざりを集める」で見ているテーマ

let themeBg = "white";
let themeCard = "pink";
let chosenBottle = null;
let tasks = [];    
let currentUser  = null;
let channel = null;
let viewMode = "friends"; // "friends" か "everyone"
let groups = [];
let currentGroupId = null;
let menuTaskId = null;
let cameraTaskId = null;
let cameraStream = null;
let facingMode = "environment"; // "environment" が外カメラ、"user" が内カメラ
let viewerPhotos = [];
let viewerIndex = 0;
let viewerTimer = null;
let reactionTaskId = null;
let cameraMode = "proof"; // "proof" が達成の写真、"reaction" が自撮りリアクション
const EMOJIS = ["👏", "🔥", "💪", "🥹", "✨", "😂"];
let wishData = {}; // タイムラインの投稿ごとの情報（ボタンを押したときに使う）
// 日付を「2026-11-01」の形の文字にする（日本時間のまま）
let groupWishData = {}; // グループのやりたいことごとの情報
let toastTimer = null;
const LEVELS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const calPrev = document.getElementById("calPrev");
const calNext = document.getElementById("calNext");
const calTitle = document.getElementById("calTitle");
const calGrid = document.getElementById("calGrid");

// カレンダーで見ている月（その月の1日）
let calMonth = new Date();
calMonth.setDate(1);

const groupTitle = document.getElementById("groupTitle");

const groupCreateBox = document.getElementById("groupCreateBox");
const groupCreateToggle = document.getElementById("groupCreateToggle");

const avatarInput = document.getElementById("avatarInput");
const myAvatar = document.getElementById("myAvatar");
const myAvatarEmpty = document.getElementById("myAvatarEmpty");
const friendAvatar = document.getElementById("friendAvatar");

let myAvatarUrl = null;

const openAddSheet = document.getElementById("openAddSheet");
const addSheet = document.getElementById("addSheet");
const addCancel = document.getElementById("addCancel");

function toDateString(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
}

// 今選んでいる日付（最初は今日）
let selectedDate = toDateString(new Date());
dateInput.value = selectedDate;
homeDate.textContent = formatHomeDate(selectedDate);

// URLに招待コードがあれば、一時的に覚えておく
const params = new URLSearchParams(window.location.search);
const inviteFromUrl = params.get("invite");
const groupFromUrl = params.get("group");

if (inviteFromUrl) {
  sessionStorage.setItem("invite", inviteFromUrl);
}
if (groupFromUrl) {
  sessionStorage.setItem("groupInvite", groupFromUrl);
}
if (inviteFromUrl || groupFromUrl) {
  // アドレスバーから ?invite=... や ?group=... を消しておく
  history.replaceState(null, "", window.location.pathname);
}

// ---------- ログインまわり ----------

// 新規登録
signupButton.addEventListener("click", async function() {
    const {error} = await db.auth.signUp({
        email: emailInput.value,
        password: passwordInput.value,
    });
    if (error) {
        alert("新規登録に失敗しました: " + error.message);
    }
});
// ログイン
loginButton.addEventListener("click", async function() {
    const {error} = await db.auth.signInWithPassword    ({
        email: emailInput.value,
        password: passwordInput.value
    });
    if (error) {
        alert("ログインに失敗しました: " + error.message);
    }
});

// ログアウト
logoutButton.addEventListener("click", async function() {
    await db.auth.signOut();
});

// ログイン状態が変わったら、見せる画面を切り替える
db.auth.onAuthStateChange(function(event, session) {
    if (session) {
        currentUser = session.user;
        authArea.hidden = true;
        setTimeout(checkProfile, 0);// ニックネームがあるか確認する
    } else {
        currentUser = null;
        authArea.hidden = false;
        appArea.hidden = true; 
        appTitle.hidden = false;
        stopRealtime();
    }   
});

 // ニックネームが登録済みか調べる
async function checkProfile() {
    const { data, error } = await db
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .maybeSingle();  
    
    if (error) {
        alert("ニックネームの読み込みに失敗しました: " + error.message);
        return;
    }

        if (data && !data.bottle_color) {
        // ニックネームはあるけど、色がまだ
        showBottleChoice();
    } else if (data) {
        myBottleColor = data.bottle_color;
        themeBg = data.theme_bg || "white";
        themeCard = data.theme_card || "pink";
        decoTheme = data.deco_theme || "cute";
        myDeco = decoOf(data);
        myAvatarUrl = data.avatar_url;
        applyTheme();
        showApp(data.nickname);
    } else {
        nicknameArea.hidden = false;
        appArea.hidden = true;
    }
}
// リスト画面を見せる
async function showApp(nickname) {
    bottleArea.hidden = true;
    nicknameArea.hidden = true;
    appArea.hidden = false;
    appTitle.hidden = true;
    userInfo.textContent = nickname;
    await loadDecorations();
    loadTasks();
    loadEveryone();
    startRealtime();
    useInvite();
    useGroupInvite();
}

// ボトルの色をえらぶ画面を出す
function showBottleChoice() {
    nicknameArea.hidden = true;
    appArea.hidden = true;
    bottleArea.hidden = false;

    bottleChoices.innerHTML = "";
    BOTTLE_COLORS.forEach(function (color) {
        const button = document.createElement("button");
        button.className = "bottleChoice";
        button.dataset.key = color.key;

        const bottle = document.createElement("div");
        bottle.className = "miniBottle";
        bottle.style.borderColor = color.line;
        bottle.style.background = color.glass;

        const label = document.createElement("span");
        label.textContent = color.name;

        button.append(bottle, label);
        bottleChoices.append(button);
    });
}

// 色をタップしたとき
bottleChoices.addEventListener("click", function (event) {
    const button = event.target.closest(".bottleChoice");
    if (!button) {
        return;
    }

    // いったん全部の選択を外してから、押したものだけ選ぶ
    bottleChoices.querySelectorAll(".bottleChoice").forEach(function (b) {
        b.classList.remove("selected");
    });
    button.classList.add("selected");

    chosenBottle = button.dataset.key;
    bottleButton.disabled = false;
});

// 「このボトルではじめる」
bottleButton.addEventListener("click", async function () {
    if (!chosenBottle) {
        return;
    }

    const { error } = await db
        .from("profiles")
        .update({ bottle_color: chosenBottle })
        .eq("id", currentUser.id);

    if (error) {
        alert("ボトルの色を保存できませんでした: " + error.message);
        return;
    }

    bottleArea.hidden = true;
    checkProfile();
});

// ニックネームを登録する
nicknameButton.addEventListener("click", async function() {
    const nickname = nicknameInput.value.trim();
    if (nickname === "") {
        return;
    }

    const { error } = await db.from("profiles").insert({ nickname: nickname});
    if (error) {
        alert("ニックネームの登録に失敗しました: " + error.message);
        return;
    }

        showBottleChoice();
});

// ---------- タスクまわり ----------

// 自分のタスクをSupabaseから読み込む
async function loadTasks() {
  const { data, error } = await db
        .from("tasks")
        .select("*")
        .eq("user_id", currentUser.id)
        .eq("task_date", selectedDate)
        .order("created_at");

  const { data: secrets, error: secretError } = await db
        .from("task_secrets")
        .select("task_id, text");

    if (error || secretError) {
        alert("読み込みエラー");
        return;
    }

    //プライベートなタスクに、秘密の文字をくっつける
    data.forEach(function (task) {
        if (task.is_private){
            const secret = secrets.find(function (s) {
                return s.task_id === task.id;
            });
            if (secret) {
              task.text = secret.text;
            }else {
            task.text ="";
            }
        }
    });

  // 達成の写真とリアクションを読み込んで、タスクにくっつける
  const ids = data.map(function (t) {
    return t.id;
  });
  const photos = await getPhotos(ids);
  const reactions = await getReactions(ids);
  data.forEach(function (task) {
    task.photo = photos[task.id];
    task.reactions = reactions[task.id];
  });

    tasks = data;
    render();
}

// データをもとに画面を描く
function render() {
  tasklist.innerHTML = "";

  // まだのタスク（上に浮かぶ）と、達成したタスク（新しいものほど上の層）
  const pending = tasks.filter(function (t) {
    return !t.done;
  });
  const done = tasks
    .filter(function (t) {
      return t.done;
    })
    .sort(byCompletedAt)
    .reverse();

  // まだ → 達成 の順に並べる
  pending.concat(done).forEach(function (task) {
        // 液体のいちばん上の層の前に、波を入れる
    if (task === done[0]) {
      const wave = document.createElement("li");
      wave.className = "liquid-wave";
      wave.innerHTML =
        '<svg viewBox="0 0 680 16" preserveAspectRatio="none">' +
        '<path d="M0 8 Q 42.5 0 85 8 T 170 8 T 255 8 T 340 8 T 425 8 T 510 8 T 595 8 T 680 8 V16 H0 Z"></path>' +
        "</svg>";
      wave.querySelector("path").setAttribute("fill", CATEGORY_COLORS[task.category]);
      tasklist.appendChild(wave);
    }
    const li = document.createElement("li");
    li.className = "task";
    li.dataset.id = task.id;

    let text = "【" + task.category + "】" + task.text;
    if (task.is_private) {
      text = "🗝 " + text;
    }

    // 達成したものは、カテゴリーの色の液体にする
    if (task.done) {
      li.classList.add("done", "liquid");
      li.style.background = CATEGORY_COLORS[task.category];
      if (task === done[0]) {
        li.classList.add("liquid-top");
      }
      // 左：達成の証拠（写真か💧）
      li.appendChild(makeProof(task.photo, text));
    }

    // まんなか：タスクの文字
    const label = document.createElement("span");
    label.className = "task-label";
    label.textContent = text;
    li.appendChild(label);

    // 右：届いたリアクション
    li.appendChild(makeReactionBubbles(task.reactions));

    // 右：削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "×";
    deleteButton.className = "deleteButton";
    li.appendChild(deleteButton);

    tasklist.appendChild(li);
  });

  // 全部達成したら「満タン！」
  fullMessage.hidden = !(tasks.length > 0 && pending.length === 0);

  renderBottle();
}

// 自分のボトルを描く
function renderBottle() {
    // 自分のボトルの色を CSS 変数に入れる
    const color = BOTTLE_COLORS.find(function (c) {
        return c.key === myBottleColor;
    });
    if (color) {
        dailyArea.style.setProperty("--line", color.line);
        dailyArea.style.setProperty("--glass", color.glass);
    }

    // 達成したタスク（達成した順）
    const doneTasks = tasks
        .filter(function (t) {
            return t.done;
        })
        .sort(byCompletedAt);

    // 液体の層をつくる（タスク1つ分の高さ = 全体 ÷ タスクの数）
    myBottleBody.innerHTML = "";
    doneTasks.forEach(function (task) {
        const layer = document.createElement("div");
        layer.className = "bottle-layer";
        layer.style.height = 100 / tasks.length + "%";
        layer.style.background = CATEGORY_COLORS[task.category];
        myBottleBody.appendChild(layer);
    });

    // 達成の数
    if (tasks.length === 0) {
        myBottleCount.textContent = "まだリストがないよ";
    } else {
        const percent = Math.round((doneTasks.length * 100) / tasks.length);
        myBottleCount.textContent =
            doneTasks.length + " / " + tasks.length + " 達成 ・ " + percent + "%";
    }

    // まだのタスクを2つまで
    myBottlePending.innerHTML = "";
    tasks
        .filter(function (t) {
            return !t.done;
        })
        .slice(0, 2)
        .forEach(function (task) {
            const line = document.createElement("div");
            line.textContent = "・【" + task.category + "】" + task.text;
            myBottlePending.appendChild(line);
        });
    applyDecorations(myBottleCard.querySelector(".bottle"), myDeco);
    applyDecorations(document.querySelector(".big-bottle"), myDeco);
}

// 日付を「11月5日（木）」の形にする
function formatHomeDate(dateString) {
    const d = new Date(dateString + "T00:00:00");
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return (d.getMonth() + 1) + "月" + d.getDate() + "日（" + days[d.getDay()] + "）";
}

// ホーム ⇔ 自分のリスト
function showHome() {
  homeView.hidden = false;
  mineView.hidden = true;
  friendListView.hidden = true;
   friendPageView.hidden = true;
  window.scrollTo(0, 0);
}

myBottleCard.addEventListener("click", function () {
    homeView.hidden = true;
    mineView.hidden = false;
    window.scrollTo(0, 0);
});

backHome.addEventListener("click", function () {
    showHome();
});

// 左から右にスワイプして、ホームにもどる
function addSwipeBack(view) {
  let startX = 0;
  let startY = 0;
  let moving = false; // 横にスワイプしているところか
  let dx = 0;         // 右にどれだけ動いたか

  // 指がふれたとき：はじめの位置をおぼえる
  view.addEventListener(
    "touchstart",
    function (event) {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      moving = false;
      dx = 0;
      view.style.transition = "none";
    },
    { passive: true }
  );

  // 指が動いているとき：横向きなら、画面を指についてこさせる
  view.addEventListener(
    "touchmove",
    function (event) {
      const touch = event.touches[0];
      const x = touch.clientX - startX;
      const y = touch.clientY - startY;

      if (!moving) {
        // 横の動きが縦より大きいときだけ、スワイプとみなす
        if (Math.abs(x) > 10 && Math.abs(x) > Math.abs(y)) {
          moving = true;
        } else {
          return;
        }
      }

      dx = Math.max(0, x); // 左には動かさない
      view.style.transform = "translateX(" + dx + "px)";
    },
    { passive: true }
  );

  // 指をはなしたとき：80px 以上ならホームへ、足りなければ元にもどす
  function finish() {
    if (!moving) {
      return;
    }
    moving = false;
    view.style.transition = "transform 0.2s ease-out";

    if (dx > 80) {
      view.style.transform = "translateX(100%)";
      setTimeout(function () {
        view.style.transition = "none";
        view.style.transform = "";
        showHome();
      }, 200);
    } else {
      view.style.transform = "";
    }
  }

  view.addEventListener("touchend", finish);
  view.addEventListener("touchcancel", finish);
}

addSwipeBack(mineView);
addSwipeBack(friendListView);
addSwipeBack(friendPageView);

// ＋ → 入力のポップアップを開く
openAddSheet.addEventListener("click", function () {
  addSheet.hidden = false;
  taskinput.focus();
});

// 「やめる」で閉じる
addCancel.addEventListener("click", function () {
  addSheet.hidden = true;
});

// うしろの暗いところをタップしても閉じる
addSheet.addEventListener("click", function (event) {
  if (event.target === addSheet) {
    addSheet.hidden = true;
  }
});

// Enter キーでも追加できる（日本語の変換中は追加しない）
taskinput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !event.isComposing) {
    addButton.click();
  }
});

//追加ボタン
addButton.addEventListener("click", async function() {
    const text= taskinput.value.trim();
    const category= categorySelect.value;
    const isPrivate= privateCheck.checked;

    if (text === "") {
        return;
    }

    //ぷらいべーとはみせない
    let publicText = text;
    if (isPrivate) {
        publicText =null;       
    }

//taskに追加して、できたタスクを受け取る
    const {data: newTask, error } = await db
    .from("tasks")
    .insert({ category: category, is_private: isPrivate, text: publicText, task_date: selectedDate })
    .select()
    .single();

    if (error) {
        alert("タスクの追加に失敗しました: " + error.message);
        return;
    }   
//プライベートはもじをかくす
    if (isPrivate) {
        const{error: secretError } = await db
        .from("task_secrets")
        .insert({ task_id: newTask.id, text: text });

    if (secretError) {
        alert("プライベートモードに失敗しました"+ secretError.message);
        return;
     }
    }
    taskinput.value = "";
    addSheet.hidden = true;
    privateCheck.checked = false;
    loadTasks();
});

// クリックで削除、または達成・未達成の切り替え
tasklist.addEventListener("click", async function (event) {
  const li = event.target.closest("li");
  if (!li) {
    return;
  }
  const id = Number(li.dataset.id);
  const task = tasks.find(function (t) {
    return t.id === id;
  });

  // 削除ボタン
  if (event.target.classList.contains("deleteButton")) {
    if (!confirm("タスクを削除しますか？")) {
      return;
    }
    if (task.photo) {
      await db.storage.from("task-photos").remove([task.photo.path]);
    }
    const { error } = await db.from("tasks").delete().eq("id", id);
    if (error) {
      alert("タスクの削除に失敗しました: " + error.message);
      return;
    }
    loadTasks();
    return;
  }

    // 自撮りのリアクションを押したとき → 大きく見る
  if (event.target.classList.contains("reaction-selfie")) {
    openViewer(
      [{ url: event.target.src, caption: "🤳 " + event.target.alt, name: event.target.alt, time: "", taskId: id, mine: true, round: true }],
      0
    );
    return;
  }

  // リアクションの丸を押したとき → 誰から何が届いたか
  if (event.target.closest(".reactions")) {
    showWho(task.reactions);
    return;
  }

  // 写真を押したとき → 自分の写真を全画面で
  if (event.target.classList.contains("task-photo")) {
    const myPhotos = myViewerPhotos();
    const start = myPhotos.findIndex(function (p) {
      return p.taskId === id;
    });
    openViewer(myPhotos, start);
    return;
  }

  // 達成済み → 未達成に戻す
  if (task.done) {
    if (task.photo) {
      if (!confirm("未達成に戻すと、写真も消えます。いいですか？")) {
        return;
      }
      await db.storage.from("task-photos").remove([task.photo.path]);
      await db.from("task_photos").delete().eq("task_id", id);
    }
    setDone(id, false);
    return;
  }

  // まだのタスク → 達成のしかたを選ぶ
  openDoneMenu(task);
});

// ---------- みんなのリスト ----------
async function loadEveryone() {
  const { data: profiles, error: error1 } = await db
    .from("profiles")
    .select("id, nickname, bottle_color, avatar_url,  deco_cap, deco_necklace, deco_lame, deco_charm, deco_lace");

  const { data: allTasks, error: error2 } = await db
    .from("tasks")
    .select("*")
    .eq("task_date", selectedDate)
    .order("created_at");

  const { data: friendRows, error: error3 } = await db
    .from("friendships")
    .select("friend_id");

  if (error1 || error2 || error3) {
    alert("みんなのリストを読み込めませんでした");
    return;
  }

  // フレンドのIDだけを並べた配列にする
  const friendIds = friendRows.map(function (row) {
    return row.friend_id;
  });

  // 自分がこの日のリストを書いたか（書いていないと、フレンドのリストはぼやける）
  const myCount = allTasks.filter(function (t) {
    return t.user_id === currentUser.id;
  }).length;
  const unlocked = myCount > 0;

  // フレンドのタスク
  const friendTasks = allTasks.filter(function (t) {
    return t.user_id !== currentUser.id;
  });
  const friendTaskIds = friendTasks.map(function (t) {
    return t.id;
  });
  const friendDoneIds = friendTasks
    .filter(function (t) {
      return t.done;
    })
    .map(function (t) {
      return t.id;
    });

  // 写真・自分がもう見た写真・リアクション
  const photos = await getPhotos(friendDoneIds);
  const seenIds = await getSeenIds(friendDoneIds);
  const reactions = await getReactions(friendTaskIds);

  everyoneArea.innerHTML = "";
  const shelfItems = []; // 棚に並べる人

  profiles.forEach(function (profile) {
    // 自分は上に出ているので省略
    if (profile.id === currentUser.id) {
      return;
    }

    // フレンドじゃない人はとばす
    if (!friendIds.includes(profile.id)) {
      return;
    }

    // この人のタスクだけを取り出す
    const theirTasks = allTasks.filter(function (t) {
      return t.user_id === profile.id;
    });

    // そのうち完了したものの数
    const doneCount = theirTasks.filter(function (t) {
      return t.done;
    }).length;

    // 写真つきで達成したタスク（達成した順）と、そのうちまだ見ていないもの
    const photoTasks = theirTasks
      .filter(function (t) {
        return t.done && photos[t.id];
      })
      .sort(byCompletedAt);
    const newTasks = photoTasks.filter(function (t) {
      return !seenIds.includes(t.id);
    });
        shelfItems.push({
      profile: profile,
      theirTasks: theirTasks,
      photoTasks: photoTasks,
      newTasks: newTasks,
    });

    // 一人分のカードをつくる
    const card = document.createElement("div");
    card.className = "person";
    if (!unlocked) {
      card.classList.add("locked");
    }

        // 左：小さいボトル（タップで写真）
    const side = document.createElement("button");
    side.className = "shelf-bottle person-bottle";
    if (unlocked && newTasks.length > 0) {
      side.classList.add("glow");
    }
    side.appendChild(makeSmallBottle(profile.bottle_color, theirTasks));
    side.addEventListener("click", function () {
      if (!unlocked) {
        alert("この日の自分のリストを書くと見られるよ！");
        return;
      }
      let list = newTasks;
      if (list.length === 0) {
        list = photoTasks;
      }
      if (list.length === 0) {
        alert("まだ写真がないよ");
        return;
      }
      openViewer(toViewerPhotos(list, profile.nickname, photos), 0);
    });

    // 右：名前とタスクを入れる箱
    const main = document.createElement("div");
    main.className = "person-main";

    // 名前の行（名前・達成数・新着マーク）
    const header = document.createElement("div");
    header.className = "person-header";

    const title = document.createElement("h3");
    title.textContent =
      profile.nickname + " (" + doneCount + "/" + theirTasks.length + ")";
        title.classList.add("friend-link");
    title.addEventListener("click", function () {
      openFriendPage(profile);
    });
      header.appendChild(title);

    if (photoTasks.length > 0) {
      const mark = document.createElement("button");
      mark.className = "new-mark";
      if (newTasks.length > 0) {
        mark.classList.add("has-new");
        mark.textContent = "💧 新着" + newTasks.length;
      } else {
        mark.textContent = "💧";
      }

      // 新着があれば新着だけ、なければ全部を流す
      mark.addEventListener("click", function () {
        if (!unlocked) {
          alert("この日の自分のリストを書くと見られるよ！");
          return;
        }
        let list = newTasks;
        if (list.length === 0) {
          list = photoTasks;
        }
        openViewer(toViewerPhotos(list, profile.nickname, photos), 0);
      });

      header.appendChild(mark);
    }
    main.appendChild(header);

    // タスクの一覧
    const ul = document.createElement("ul");
    theirTasks.forEach(function (task) {
      const li = document.createElement("li");
      li.className = "task";
         if (task.done) {
        li.classList.add("done");
        li.style.background = CATEGORY_COLORS[task.category];
      }
      // 左：写真があれば小さい📷（押すとその写真から見られる）
      if (photos[task.id]) {
        const small = document.createElement("span");
        small.className = "photo-mark";
        small.textContent = "📷";
        small.addEventListener("click", function (event) {
          event.stopPropagation();
          if (!unlocked) {
            alert("この日の自分のリストを書くと見られるよ！");
            return;
          }
          openViewer(
            toViewerPhotos(photoTasks, profile.nickname, photos),
            photoTasks.indexOf(task)
          );
        });
        li.appendChild(small);
      }

      // まんなか：タスクの文字
      const label = document.createElement("span");
      label.className = "task-label";
      if (task.is_private) {
        label.textContent = "【" + task.category + "】ひみつ！";
      } else {
        label.textContent = "【" + task.category + "】" + task.text;
      }
      li.appendChild(label);

       // 右：届いたリアクションと、空のリアクションマーク
      let taskReactions = reactions[task.id];
      if (!taskReactions) {
        taskReactions = [];
      }
      const mine = taskReactions.find(function (r) {
        return r.userId === currentUser.id;
      });

      const right = makeReactionBubbles(taskReactions);
      if (!mine) {
        const add = document.createElement("span");
        add.className = "reaction-bubble reaction-add";
        add.textContent = "+";
        right.appendChild(add);
      }
      li.appendChild(right);

      // タスクを押すと、その場にリアクションが広がる
      li.addEventListener("click", function (event) {
        event.stopPropagation();
        if (!unlocked) {
          alert("この日の自分のリストを書くと、リアクションできるよ！");
          return;
        }
        openReactionPicker(right, task, mine);
      });

      ul.appendChild(li);
    });
    main.appendChild(ul);

    if (!unlocked) {
      const lock = document.createElement("p");
      lock.className = "lock-message";
      lock.textContent = "この日の自分のリストを書くと、見られるようになるよ";
      main.appendChild(lock);
    }
    card.append(side, main);
    everyoneArea.appendChild(card);
  });

    renderShelf(shelfItems, unlocked, photos); 

  if (everyoneArea.innerHTML === "") {
    const message = document.createElement("p");
    message.textContent = "まだフレンドがいません。招待リンクで友達を誘ってみよう！";
    everyoneArea.appendChild(message);
  }
}

// IDから、かざりを探す
function findDecoration(id) {
  if (!id) {
    return null;
  }
  const found = decorations.find(function (d) {
    return d.id === id;
  });
  return found || null;
}

// プロフィールから、つけているかざりを取り出す
function decoOf(profile) {
  return {
    cap: profile.deco_cap,
    necklace: profile.deco_necklace,
    lame: profile.deco_lame,
    charm: profile.deco_charm,
    lace: profile.deco_lace
  };
}

// ボトルにかざりをつける（どの大きさのボトルでも使える）
function applyDecorations(bottle, deco) {
  if (!bottle || !deco) {
    return;
  }
  const cap = bottle.querySelector(".bottle-cap");
  const neck = bottle.querySelector(".bottle-neck");
  const body = bottle.querySelector(".bottle-body, .big-bottle-body");

  // いったん前のかざりを外す
  bottle.querySelectorAll(".deco-part").forEach(function (el) {
    el.remove();
  });
  cap.classList.remove("cap-crown", "cap-heart", "cap-round");
  cap.style.background = "";

  // キャップ（色と形）
  const capItem = findDecoration(deco.cap);
  if (capItem) {
    cap.style.background = capItem.color;
    if (capItem.shape && capItem.shape !== "gem") {
      cap.classList.add("cap-" + capItem.shape);
    }
  }

  // 首かざり
  const necklace = findDecoration(deco.necklace);
  if (necklace) {
    const el = document.createElement("div");
    el.className = "deco-part deco-necklace";
    el.style.background = necklace.color;
    neck.appendChild(el);
  }

  // チャーム
  const charm = findDecoration(deco.charm);
  if (charm) {
    const el = document.createElement("div");
    el.className = "deco-part deco-charm";
    el.style.background = charm.color;
    neck.appendChild(el);
  }

  // ラメ
  const lame = findDecoration(deco.lame);
  if (lame) {
    const el = document.createElement("div");
    el.className = "deco-part deco-lame";
    LAME_SPOTS.forEach(function (spot) {
      const dot = document.createElement("span");
      dot.style.left = spot[0] + "%";
      dot.style.top = spot[1] + "%";
      dot.style.background = lame.color;
      el.appendChild(dot);
    });
    body.appendChild(el);
  }

  // レース
  const lace = findDecoration(deco.lace);
  if (lace) {
    const el = document.createElement("div");
    el.className = "deco-part deco-lace";
    el.style.borderColor = lace.color;
    body.appendChild(el);
  }
}

// 小さいボトルを1つ作る
function makeSmallBottle(colorKey, theirTasks, deco) {
  const bottle = document.createElement("div");
  bottle.className = "bottle";

  let color = BOTTLE_COLORS.find(function (c) {
    return c.key === colorKey;
  });
  if (!color) {
    color = BOTTLE_COLORS[0];
  }
  bottle.style.setProperty("--line", color.line);
  bottle.style.setProperty("--glass", color.glass);

  const cap = document.createElement("div");
  cap.className = "bottle-cap";
  const collar = document.createElement("div");
  collar.className = "bottle-collar";
  const neck = document.createElement("div");
  neck.className = "bottle-neck";
  const body = document.createElement("div");
  body.className = "bottle-body";

  // 達成した順に、下から液体をためる
  theirTasks
    .filter(function (t) {
      return t.done;
    })
    .sort(byCompletedAt)
    .forEach(function (task) {
      const layer = document.createElement("div");
      layer.className = "bottle-layer";
      layer.style.height = 100 / theirTasks.length + "%";
      layer.style.background = CATEGORY_COLORS[task.category];
      body.appendChild(layer);
    });

  bottle.append(cap, collar, neck, body);
   applyDecorations(bottle, deco);
  return bottle;
}

// フレンドの棚を描く
function renderShelf(items, unlocked, photos) {
  shelfArea.innerHTML = "";

  if (items.length === 0) {
    const message = document.createElement("p");
    message.className = "shelf-empty";
    message.textContent = "まだフレンドがいません。マイページの招待リンクで誘ってみよう！";
    shelfArea.appendChild(message);
    return;
  }

  // 新しい写真がある人を前に
  items.sort(function (a, b) {
    const aNew = a.newTasks.length > 0 ? 1 : 0;
    const bNew = b.newTasks.length > 0 ? 1 : 0;
    return bNew - aNew;
  });

  // 4人ずつ1段にする
  for (let i = 0; i < items.length; i += 4) {
    const rowItems = items.slice(i, i + 4);

    const bottles = document.createElement("div");
    bottles.className = "shelf-row-bottles";
    const board = document.createElement("div");
    board.className = "shelf-board";
    const labels = document.createElement("div");
    labels.className = "shelf-row-labels";

    rowItems.forEach(function (item) {
      const friend = document.createElement("div");
      friend.className = "shelf-friend";

      const name = document.createElement("span");
      name.className = "shelf-name";
      name.textContent = item.profile.nickname;
            name.addEventListener("click", function () {
        openFriendPage(item.profile);
      });

      const button = document.createElement("button");
      button.className = "shelf-bottle";
      if (!unlocked) {
        button.classList.add("locked");
      }
      if (unlocked && item.newTasks.length > 0) {
        button.classList.add("glow");
      }
      button.appendChild(makeSmallBottle(item.profile.bottle_color, item.theirTasks, decoOf(item.profile)));

      // ボトルをタップ → 達成写真（新着があれば新着だけ）
      button.addEventListener("click", function () {
        if (!unlocked) {
          alert("この日の自分のリストを書くと見られるよ！");
          return;
        }
        let list = item.newTasks;
        if (list.length === 0) {
          list = item.photoTasks;
        }
        if (list.length === 0) {
          alert("まだ写真がないよ");
          return;
        }
        openViewer(toViewerPhotos(list, item.profile.nickname, photos), 0);
      });

      friend.append(name, button);
      bottles.appendChild(friend);

      // 棚の下の小さい札
      const label = document.createElement("div");
      label.className = "shelf-label";
      const tag = document.createElement("span");
      if (unlocked) {
        const doneCount = item.theirTasks.filter(function (t) {
          return t.done;
        }).length;
        tag.textContent = doneCount + " / " + item.theirTasks.length;
      } else {
        tag.textContent = "書くと見える";
      }
      label.appendChild(tag);
      labels.appendChild(label);
    });

    const row = document.createElement("div");
    row.append(bottles, board, labels);
    shelfArea.appendChild(row);
  }
}

// 「まだないよ」のような1行のお知らせを作る
function emptyNote(text) {
  const li = document.createElement("li");
  li.className = "empty-note";
  li.textContent = text;
  return li;
}

// フレンドのマイページを開く
async function openFriendPage(profile) {
  homeView.hidden = true;
  mineView.hidden = true;
  friendListView.hidden = true;
  friendPageView.hidden = false;
  window.scrollTo(0, 0);

  friendName.textContent = profile.nickname;
    if (profile.avatar_url) {
    friendAvatar.src = profile.avatar_url;
    friendAvatar.hidden = false;
  } else {
    friendAvatar.hidden = true;
  }

  // その日のタスク
  const { data: todayTasks } = await db
    .from("tasks")
    .select("*")
    .eq("user_id", profile.id)
    .eq("task_date", selectedDate)
    .order("created_at");

  // ボトル
  friendPageBottle.innerHTML = "";
  friendPageBottle.appendChild(makeSmallBottle(profile.bottle_color, todayTasks || [], decoOf(profile)));

  // これまでの達成回数
  const { count } = await db
    .from("tasks")
    .select("id", { count: "exact", head: true })
    .eq("user_id", profile.id)
    .eq("done", true);
  friendStats.textContent = "これまでの達成 " + (count || 0) + "回";

  // きょうのやること（自分が書いていない日はぼかす）
  const unlocked = tasks.length > 0;
  friendTodayList.innerHTML = "";
  friendTodayList.classList.toggle("locked-list", !unlocked);
  if (!todayTasks || todayTasks.length === 0) {
    friendTodayList.appendChild(emptyNote("まだリストがないよ"));
  } else {
    todayTasks.forEach(function (task) {
      const li = document.createElement("li");
      li.className = "task";
      if (task.done) {
        li.classList.add("done");
        li.style.background = CATEGORY_COLORS[task.category];
      }
      if (task.is_private) {
        li.textContent = "【" + task.category + "】ひみつ！";
      } else {
        li.textContent = "【" + task.category + "】" + task.text;
      }
      friendTodayList.appendChild(li);
    });
  }

  // やってみたいこと（新しい10こ）
  const { data: wishes } = await db
    .from("wishes")
    .select("text, done")
    .eq("user_id", profile.id)
    .order("created_at", { ascending: false })
    .limit(10);
  friendWishList.innerHTML = "";
  if (!wishes || wishes.length === 0) {
    friendWishList.appendChild(emptyNote("まだないよ"));
  } else {
    wishes.forEach(function (wish) {
      const li = document.createElement("li");
      if (wish.done) {
        li.textContent = "🎉 " + wish.text;
      } else {
        li.textContent = wish.text;
      }
      friendWishList.appendChild(li);
    });
  }

  // これまでの写真（新しい30こ）
  const { data: doneTasks } = await db
    .from("tasks")
    .select("*")
    .eq("user_id", profile.id)
    .eq("done", true)
    .order("completed_at", { ascending: false })
    .limit(30);
  const ids = (doneTasks || []).map(function (t) {
    return t.id;
  });
  const photos = await getPhotos(ids);
  const photoTasks = (doneTasks || []).filter(function (t) {
    return photos[t.id];
  });

  // 自分がリストを書いた日だけ、写真が見られる
  const dates = photoTasks.map(function (t) {
    return t.task_date;
  });
  let myDates = [];
  if (dates.length > 0) {
    const { data: myRows } = await db
      .from("tasks")
      .select("task_date")
      .eq("user_id", currentUser.id)
      .in("task_date", dates);
    myDates = (myRows || []).map(function (r) {
      return r.task_date;
    });
  }
  const openable = photoTasks.filter(function (t) {
    return myDates.includes(t.task_date);
  });

  friendPhotos.innerHTML = "";
  if (photoTasks.length === 0) {
    const note = document.createElement("p");
    note.className = "empty-note";
    note.textContent = "まだ写真がないよ";
    friendPhotos.appendChild(note);
  }
  photoTasks.forEach(function (task) {
    const img = document.createElement("img");
    img.src = photos[task.id].url;
    img.alt = "達成の写真";
    const canOpen = myDates.includes(task.task_date);
    if (!canOpen) {
      img.classList.add("locked");
    }
    img.addEventListener("click", function () {
      if (!canOpen) {
        alert("この日の自分のリストを書くと見られるよ！");
        return;
      }
      openViewer(toViewerPhotos(openable, profile.nickname, photos), openable.indexOf(task));
    });
    friendPhotos.appendChild(img);
  });
}

backFromFriendPage.addEventListener("click", function () {
  showHome();
});

// 棚の空いているところをタップ → フレンドのリスト
shelfArea.addEventListener("click", function (event) {
  if (event.target.closest(".shelf-bottle, .shelf-name")) {
    return;
  }
  if (shelfArea.querySelector(".shelf-empty")) {
    return;
  }
  homeView.hidden = true;
  friendListView.hidden = false;
  window.scrollTo(0, 0);
});

backHomeFromFriends.addEventListener("click", function () {
  showHome();
});

// ---------- リアルタイム更新 ----------

function startRealtime() {
    if (channel) {
        return;
    }

    channel = db
        .channel("realtime-tasks")
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "tasks" },
            function() {
                loadTasks();
                loadEveryone();
            }
        )
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "profiles" },
            function() {
                loadEveryone();
            }
        )
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "friendships" },
             function () {
                 loadEveryone();
         }
        )
        .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "wishes" },
      function () {
        if (!wishArea.hidden) {
          loadWishes();
        }
      }
    )
        .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "group_wishes" },
      function () {
        if (!groupArea.hidden) {
          loadGroupWishes();
        }
      }
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "group_members" },
      function () {
        if (!groupArea.hidden) {
          loadGroups();
        }
      }
    )
        .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "task_reactions" },
      function () {
        loadTasks();
        loadEveryone();
      }
    )
        .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "wish_likes" },
      function () {
        if (!wishArea.hidden) {
          loadWishes();
        }
      }
    )
        .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "group_wish_reactions" },
      function () {
        if (!groupArea.hidden) {
          loadGroupWishes();
        }
      }
    )
        .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "notifications",
        filter: "user_id=eq." + currentUser.id,
      },
      function (payload) {
        showToast(payload.new.message);
        updateBell();
      }
    )
        .subscribe();
}

function stopRealtime() {
    if (channel) {
        db.removeChannel(channel);
        channel = null;
    }
}   

// ---------- 日付の切り替え ----------

function changeDate(newDate) {
    selectedDate = newDate;
    dateInput.value = selectedDate;
    homeDate.textContent = formatHomeDate(selectedDate);
    loadTasks();
    loadEveryone();
}

// カレンダーで日付を選んだとき
dateInput.addEventListener("change", function() {
    if (dateInput.value === "") {
        return;
    }
    changeDate(dateInput.value);
});

// 前の日ボタン・次の日ボタン
function moveDay(amount) {
    const d = new Date(selectedDate + "T00:00:00");
    d.setDate(d.getDate() + amount);
    changeDate(toDateString(d));
}

prevDay.addEventListener("click", function() {
    moveDay(-1);
});

nextDay.addEventListener("click", function() {
    moveDay(1);
});

// ---------- フレンドまわり ----------

// 自分の招待コードを読む（まだなければ作る）
async function getMyCode() {
  const { data } = await db
    .from("friend_codes")
    .select("code")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (data) {
    return data.code;
  }

  const { data: created, error } = await db
    .from("friend_codes")
    .insert({})
    .select("code")
    .single();

  if (error) {
    alert("招待コードを作れませんでした：" + error.message);
    return null;
  }
  return created.code;
}

// 招待リンクをコピー
inviteButton.addEventListener("click", async function () {
  const code = await getMyCode();
  if (!code) {
    return;
  }

  const link = window.location.origin + window.location.pathname + "?invite=" + code;
  await navigator.clipboard.writeText(link);
  alert("招待リンクをコピーしました！\n" + link);
});

// 覚えておいた招待コードを使って、フレンドになる
async function useInvite() {
  const code = sessionStorage.getItem("invite");
  if (!code) {
    return;
  }
  sessionStorage.removeItem("invite");

  const { data: friendName, error } = await db.rpc("add_friend_by_code", {
    invite_code: code,
  });

  if (error) {
    alert("フレンドになれませんでした：" + error.message);
    return;
  }

  alert(friendName + " さんとフレンドになりました！");
  loadEveryone();
}

// フレンド / みんな / じぶん の切り替え
function setViewMode(mode) {
  viewMode = mode;
  friendsTab.classList.toggle("active", mode === "friends");
  everyoneTab.classList.toggle("active", mode === "everyone");
  mineTab.classList.toggle("active", mode === "mine");
  loadWishes();
}
friendsTab.addEventListener("click", function () {
  setViewMode("friends");
});

everyoneTab.addEventListener("click", function () {
  setViewMode("everyone");
});
mineTab.addEventListener("click", function () {
  setViewMode("mine");
});

// これまでのボトル（きのうから30日前まで）を並べる。満タンの日の数を返す
async function loadPastBottles() {
  const from = new Date();
  from.setDate(from.getDate() - 30);
  const today = toDateString(new Date());

  const { data: rows, error } = await db
    .from("tasks")
    .select("task_date, category, done, completed_at")
    .eq("user_id", currentUser.id)
    .gte("task_date", toDateString(from))
    .lt("task_date", today);

  pastBottles.innerHTML = "";
  if (error || rows.length === 0) {
    pastEmpty.hidden = false;
    return 0;
  }
  pastEmpty.hidden = true;

  // 日付ごとに分ける { "2026-11-04": [タスク, タスク], ... }
  const days = {};
  rows.forEach(function (row) {
    if (!days[row.task_date]) {
      days[row.task_date] = [];
    }
    days[row.task_date].push(row);
  });

  // 新しい日を左に
  const dates = Object.keys(days).sort().reverse();

  const bottleRow = document.createElement("div");
  bottleRow.className = "past-row";
  const board = document.createElement("div");
  board.className = "shelf-board";
  const dateRow = document.createElement("div");
  dateRow.className = "past-row";

  let fullDays = 0;

  dates.forEach(function (date) {
    const dayTasks = days[date];
    const isFull = dayTasks.every(function (t) {
      return t.done;
    });
    if (isFull) {
      fullDays = fullDays + 1;
    }

    // ボトル（満タンなら光る）
    const button = document.createElement("button");
    button.className = "shelf-bottle past-bottle";
    if (isFull) {
      button.classList.add("glow");
    }
    button.appendChild(makeSmallBottle(myBottleColor, dayTasks, myDeco));

    // タップ → その日の自分のリストへ
    button.addEventListener("click", function () {
      changeDate(date);
      showSection("daily");
      homeView.hidden = true;
      mineView.hidden = false;
    });
    bottleRow.appendChild(button);

    // 日付「11/4」
    const label = document.createElement("span");
    label.className = "past-date";
    const parts = date.split("-");
    label.textContent = Number(parts[1]) + "/" + Number(parts[2]);
    dateRow.appendChild(label);
  });

  pastBottles.append(bottleRow, board, dateRow);
  return fullDays;
}

// カレンダーを描く
async function loadCalendar() {
  const year = calMonth.getFullYear();
  const month = calMonth.getMonth(); // 0が1月、11が12月
  const first = new Date(year, month, 1);     // その月の1日
  const last = new Date(year, month + 1, 0);  // その月の最後の日
  const today = toDateString(new Date());

  calTitle.textContent = year + "年" + (month + 1) + "月";

  // その月の自分のタスク
  const { data: rows } = await db
    .from("tasks")
    .select("id, task_date, done, completed_at")
    .eq("user_id", currentUser.id)
    .gte("task_date", toDateString(first))
    .lte("task_date", toDateString(last));

  // 日付ごとに分ける
  const days = {};
  (rows || []).forEach(function (row) {
    if (!days[row.task_date]) {
      days[row.task_date] = [];
    }
    days[row.task_date].push(row);
  });

  // 達成したタスクの写真
  const doneIds = (rows || [])
    .filter(function (t) {
      return t.done;
    })
    .map(function (t) {
      return t.id;
    });
  const photos = await getPhotos(doneIds);

  calGrid.innerHTML = "";

  // 1日が何曜日かに合わせて、前に空のマスを入れる
  for (let i = 0; i < first.getDay(); i++) {
    const blank = document.createElement("div");
    blank.className = "cal-cell empty";
    calGrid.appendChild(blank);
  }

  // 1日〜最後の日までのマス
  for (let day = 1; day <= last.getDate(); day++) {
    const date = toDateString(new Date(year, month, day));
    const dayTasks = days[date] || [];

    const cell = document.createElement("button");
    cell.className = "cal-cell";

    // 写真があれば、最初に達成した写真を背景に
    const photoTask = dayTasks
      .filter(function (t) {
        return t.done && photos[t.id];
      })
      .sort(byCompletedAt)[0];

    if (photoTask) {
      cell.classList.add("has-photo");
      cell.style.backgroundImage = 'url("' + photos[photoTask.id].url + '")';
    } else if (dayTasks.length > 0) {
      cell.classList.add("has-list");
    }

    // 満タンの日
    const isFull = dayTasks.length > 0 && dayTasks.every(function (t) {
      return t.done;
    });
    if (isFull) {
      cell.classList.add("full");
    }

    if (date === today) {
      cell.classList.add("today");
    }

    const number = document.createElement("span");
    number.textContent = day;
    cell.appendChild(number);

    // タップ → その日の自分のリストへ
    cell.addEventListener("click", function () {
      changeDate(date);
      showSection("daily");
      homeView.hidden = true;
      mineView.hidden = false;
    });

    calGrid.appendChild(cell);
  }
}

// 前の月・次の月
calPrev.addEventListener("click", function () {
  calMonth.setMonth(calMonth.getMonth() - 1);
  loadCalendar();
});

calNext.addEventListener("click", function () {
  calMonth.setMonth(calMonth.getMonth() + 1);
  loadCalendar();
});

// 自分のアイコンを出す（なければ「＋」）
function showMyAvatar() {
  if (myAvatarUrl) {
    myAvatar.src = myAvatarUrl;
    myAvatar.hidden = false;
    myAvatarEmpty.hidden = true;
  } else {
    myAvatar.hidden = true;
    myAvatarEmpty.hidden = false;
  }
}

// 選んだ写真の真ん中を、正方形に切り抜いて小さくする
function cropSquare(file) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      const side = Math.min(img.width, img.height);
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      canvas
        .getContext("2d")
        .drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, 256, 256);
      URL.revokeObjectURL(img.src);
      canvas.toBlob(resolve, "image/jpeg", 0.85);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

// 写真を選んだら → 切り抜いて保存して、プロフィールに入れる
avatarInput.addEventListener("change", async function () {
  const file = avatarInput.files[0];
  if (!file) {
    return;
  }

  const blob = await cropSquare(file);
  const path = currentUser.id + "/avatar.jpg";

  const { error: uploadError } = await db.storage
    .from("avatars")
    .upload(path, blob, { contentType: "image/jpeg", upsert: true });
  if (uploadError) {
    alert("アイコンを保存できませんでした：" + uploadError.message);
    return;
  }

  // 公開アドレス（最後に時刻を付けて、新しい写真がすぐ出るようにする）
  const { data } = db.storage.from("avatars").getPublicUrl(path);
  const url = data.publicUrl + "?v=" + Date.now();

  const { error } = await db
    .from("profiles")
    .update({ avatar_url: url })
    .eq("id", currentUser.id);
  if (error) {
    alert("アイコンを設定できませんでした：" + error.message);
    return;
  }

  myAvatarUrl = url;
  showMyAvatar();
  avatarInput.value = "";
});

// マイページを読み込む
async function loadMyPage() {
    showMyAvatar();
  // 今日の自分のボトル
  myPageBottle.innerHTML = "";
  myPageBottle.appendChild(makeSmallBottle(myBottleColor, tasks, myDeco));

  // これまでの達成回数（数だけを数える）
  const { count } = await db
    .from("tasks")
    .select("id", { count: "exact", head: true })
    .eq("user_id", currentUser.id)
    .eq("done", true);
 
  const fullDays = await loadPastBottles();
  myStats.textContent = "これまでの達成 " + (count || 0) + "回 ・ 満タン " + fullDays + "日";

  // フレンドコード
  const code = await getMyCode();
  if (code) {
    myCodeText.textContent = code;
  }
    loadCalendar();
}

// 選んでいる色を、ページ全体の CSS変数に入れる
function applyTheme() {
  const bg = PAGE_COLORS.find(function (c) {
    return c.key === themeBg;
  });
  const card = CARD_COLORS.find(function (c) {
    return c.key === themeCard;
  });
  if (bg) {
    document.documentElement.style.setProperty("--page-bg", bg.color);
  }
  if (card) {
    document.documentElement.style.setProperty("--card-bg", card.color);
  }
}

// 色のボタンを並べる（list：色の一覧、selectedKey：選んでいる色、area：入れる場所）
function makeThemeButtons(list, selectedKey, area) {
  area.innerHTML = "";
  list.forEach(function (c) {
    const button = document.createElement("button");
    button.className = "theme-choice";
    button.dataset.key = c.key;
    button.textContent = c.name;
    button.style.background = c.color;
    if (c.key === selectedKey) {
      button.classList.add("selected");
    }
    area.appendChild(button);
  });
}

function renderThemeChoices() {
  makeThemeButtons(PAGE_COLORS, themeBg, bgChoices);
  makeThemeButtons(CARD_COLORS, themeCard, cardChoices);
}

// 色をタップ → 保存して、すぐ反映（column は "theme_bg" か "theme_card"）
async function pickTheme(event, column) {
  const button = event.target.closest(".theme-choice");
  if (!button) {
    return;
  }
  const key = button.dataset.key;

  const change = {};
  change[column] = key;
  const { error } = await db.from("profiles").update(change).eq("id", currentUser.id);
  if (error) {
    alert("色を変えられませんでした：" + error.message);
    return;
  }

  if (column === "theme_bg") {
    themeBg = key;
  } else {
    themeCard = key;
  }
  applyTheme();
  renderThemeChoices();
}

bgChoices.addEventListener("click", function (event) {
  pickTheme(event, "theme_bg");
});

cardChoices.addEventListener("click", function (event) {
  pickTheme(event, "theme_card");
});

// カスタムの画面を描く
function renderCustomize() {
  // 見本のボトル（今日の液体入り）
  customizePreview.innerHTML = "";
  customizePreview.appendChild(makeSmallBottle(myBottleColor, tasks, myDeco));

  // 色のボタン
  colorChoices.innerHTML = "";
  BOTTLE_COLORS.forEach(function (color) {
    const button = document.createElement("button");
    button.className = "color-choice";
    button.dataset.key = color.key;
    if (color.key === myBottleColor) {
      button.classList.add("selected");
    }

    const dot = document.createElement("span");
    dot.className = "color-dot";
    dot.style.background = color.line;

    const name = document.createElement("span");
    name.textContent = color.name;

    button.append(dot, name);
    colorChoices.appendChild(button);
  });
    renderSlots();
}

// かざりの場所と、持っているかざりを並べる
function renderSlots() {
  // 場所のボタン
  slotTabs.innerHTML = "";
  SLOTS.forEach(function (slot) {
    const button = document.createElement("button");
    button.className = "slot-tab";
    button.dataset.key = slot.key;
    button.textContent = slot.name;
    if (slot.key === currentSlot) {
      button.classList.add("selected");
    }
    slotTabs.appendChild(button);
  });

  // 持っているかざり（どのテーマでも）＋「なし」
  const mine = decorations.filter(function (d) {
    return d.slot === currentSlot && ownedIds.includes(d.id);
  });
  const choices = [{ id: "", name: "なし", color: "#FFFFFF", theme: "" }].concat(mine);

  slotItems.innerHTML = "";
  choices.forEach(function (d) {
    const button = document.createElement("button");
    button.className = "slot-item";
    button.dataset.id = d.id;
    if ((myDeco[currentSlot] || "") === d.id) {
      button.classList.add("selected");
    }

    const swatch = document.createElement("span");
    swatch.className = "slot-swatch";
    swatch.style.background = d.color;

    const name = document.createElement("span");
    name.textContent = d.name;

    const theme = document.createElement("span");
    theme.className = "slot-theme";
    const t = DECO_THEMES.find(function (x) {
      return x.key === d.theme;
    });
    if (t) {
      theme.textContent = t.name;
    }

    button.append(swatch, name, theme);
    slotItems.appendChild(button);
  });

  if (mine.length === 0) {
    const note = document.createElement("p");
    note.className = "collection-note";
    note.textContent = "まだ持っていないよ。「かざりを集める」で集めよう！";
    slotItems.appendChild(note);
  }
}

// 場所を選ぶ
slotTabs.addEventListener("click", function (event) {
  const button = event.target.closest(".slot-tab");
  if (!button) {
    return;
  }
  currentSlot = button.dataset.key;
  renderSlots();
});

// かざりを選ぶ → 保存して、すぐつける
slotItems.addEventListener("click", async function (event) {
  const button = event.target.closest(".slot-item");
  if (!button) {
    return;
  }
  const id = button.dataset.id || null;

  const change = {};
  change["deco_" + currentSlot] = id;
  const { error } = await db.from("profiles").update(change).eq("id", currentUser.id);
  if (error) {
    alert("かざりをつけられませんでした：" + error.message);
    return;
  }

  myDeco[currentSlot] = id;
  renderCustomize();
  renderBottle();
});

// 色をタップ → すぐ保存して、見た目も変える
colorChoices.addEventListener("click", async function (event) {
  const button = event.target.closest(".color-choice");
  if (!button) {
    return;
  }
  const key = button.dataset.key;

  const { error } = await db
    .from("profiles")
    .update({ bottle_color: key })
    .eq("id", currentUser.id);

  if (error) {
    alert("色を変えられませんでした：" + error.message);
    return;
  }

  myBottleColor = key;
  renderCustomize();
  renderBottle();
});

// マイページ → カスタム
customizeOpen.addEventListener("click", async function () {
  mypageArea.hidden = true;
  customizeArea.hidden = false;
  window.scrollTo(0, 0);
  await loadOwned();
  renderCustomize();
});

// カスタム → マイページにもどる
customizeBack.addEventListener("click", function () {
  customizeArea.hidden = true;
  mypageArea.hidden = false;
  loadMyPage();
  window.scrollTo(0, 0);
});

// かざりの一覧を読みこむ
async function loadDecorations() {
  const { data } = await db.from("decorations").select("*");
  decorations = data || [];
}

// 持っているかざりを読みこむ
async function loadOwned() {
  const { data } = await db.from("owned_decorations").select("decoration_id");
  ownedIds = (data || []).map(function (row) {
    return row.decoration_id;
  });
}

// もらえるかざりがあれば、もらう（データベースの関数が数えてくれる）
async function claimDecorations() {
  const { data, error } = await db.rpc("claim_decorations");
  if (error || !data || data.length === 0) {
    return;
  }
  const names = data.map(function (id) {
    const d = decorations.find(function (x) {
      return x.id === id;
    });
    if (d) {
      return d.name;
    }
    return id;
  });
  showToast("✨ 新しいかざり「" + names.join("」「") + "」をゲット！");
}

// 「かざりを集める」を開く
async function openCollection() {
  customizeArea.hidden = true;
  collectionArea.hidden = false;
  viewTheme = decoTheme;
  window.scrollTo(0, 0);
  await claimDecorations();
  await loadOwned();
  await renderCollection();
}

// 「かざりを集める」を描く
async function renderCollection() {
  // テーマのボタン
  themeTabs.innerHTML = "";
  DECO_THEMES.forEach(function (t) {
    const button = document.createElement("button");
    button.className = "deco-theme";
    button.dataset.key = t.key;
    if (t.key === viewTheme) {
      button.classList.add("selected");
    }
    const name = document.createElement("strong");
    name.textContent = t.name;
    const desc = document.createElement("span");
    if (t.key === decoTheme) {
      desc.textContent = "いまのテーマ";
    } else {
      desc.textContent = t.desc;
    }
    button.append(name, desc);
    themeTabs.appendChild(button);
  });

  // 今と違うテーマを見ているときだけ「このテーマで集める」
  const theme = DECO_THEMES.find(function (t) {
    return t.key === viewTheme;
  });
  chooseThemeButton.hidden = viewTheme === decoTheme;
  chooseThemeButton.textContent = "「" + theme.name + "」で集める";

  // 見ているテーマで、カテゴリーごとに何回達成したか
  const { data: rows } = await db
    .from("tasks")
    .select("category")
    .eq("user_id", currentUser.id)
    .eq("done", true)
    .eq("done_theme", viewTheme);
  const counts = {};
  (rows || []).forEach(function (row) {
    counts[row.category] = (counts[row.category] || 0) + 1;
  });

  // カテゴリーごとのカード
  collectionList.innerHTML = "";
  Object.keys(CATEGORY_COLORS).forEach(function (category) {
    const count = counts[category] || 0;
    const next = STEPS.find(function (s) {
      return count < s;
    });
    const passed = STEPS.filter(function (s) {
      return count >= s;
    });
    let prev = 0;
    if (passed.length > 0) {
      prev = passed[passed.length - 1];
    }
    let progress = 100;
    if (next) {
      progress = Math.round(((count - prev) * 100) / (next - prev));
    }

    const card = document.createElement("div");
    card.className = "deco-card";

    // 上の行（色の丸・カテゴリー・回数）
    const head = document.createElement("div");
    head.className = "deco-head";
    const dot = document.createElement("span");
    dot.className = "deco-dot";
    dot.style.background = CATEGORY_COLORS[category];
    const name = document.createElement("span");
    name.textContent = category;
    const countText = document.createElement("span");
    countText.className = "deco-count";
    if (next) {
      countText.textContent = count + "回 ・ つぎまであと" + (next - count) + "回";
    } else {
      countText.textContent = count + "回 ・ ぜんぶ集めた！";
    }
    head.append(dot, name, countText);

    // 進み具合のバー
    const bar = document.createElement("div");
    bar.className = "deco-bar";
    const fill = document.createElement("div");
    fill.className = "deco-bar-fill";
    fill.style.width = progress + "%";
    bar.appendChild(fill);

    // かざり（持っているものは色付き）
    const items = document.createElement("div");
    items.className = "deco-items";
    decorations
      .filter(function (d) {
        return d.theme === viewTheme && d.category === category;
      })
      .sort(function (a, b) {
        return a.step - b.step;
      })
      .forEach(function (d) {
        const chip = document.createElement("span");
        chip.className = "deco-chip";
        if (ownedIds.includes(d.id)) {
          chip.classList.add("owned");
          chip.style.background = CATEGORY_COLORS[category];
          chip.textContent = d.name;
        } else {
          chip.textContent = d.name + "（" + d.step + "回）";
        }
        items.appendChild(chip);
      });

    card.append(head, bar, items);
    collectionList.appendChild(card);
  });
}

// テーマのボタン → そのテーマのかざりを見る
themeTabs.addEventListener("click", function (event) {
  const button = event.target.closest(".deco-theme");
  if (!button) {
    return;
  }
  viewTheme = button.dataset.key;
  renderCollection();
});

// 「このテーマで集める」
chooseThemeButton.addEventListener("click", async function () {
  const { error } = await db
    .from("profiles")
    .update({ deco_theme: viewTheme })
    .eq("id", currentUser.id);
  if (error) {
    alert("テーマを変えられませんでした：" + error.message);
    return;
  }
  decoTheme = viewTheme;
  const theme = DECO_THEMES.find(function (t) {
    return t.key === decoTheme;
  });
  showToast("これからは「" + theme.name + "」のかざりが集まるよ！");
  renderCollection();
});

collectionOpen.addEventListener("click", function () {
  openCollection();
});

collectionBack.addEventListener("click", function () {
  collectionArea.hidden = true;
  customizeArea.hidden = false;
  renderCustomize();
  window.scrollTo(0, 0);
});

// ⚙️ → 設定
settingsOpen.addEventListener("click", function () {
  mypageArea.hidden = true;
  settingsArea.hidden = false;
  renderThemeChoices();
  window.scrollTo(0, 0);
});

// 設定 → マイページにもどる
settingsBack.addEventListener("click", function () {
  settingsArea.hidden = true;
  mypageArea.hidden = false;
  window.scrollTo(0, 0);
});

// 通知の設定（前に作ったパネルを開く）
openNotificationSettings.addEventListener("click", function () {
  openSettings();
});

// ---------- やってみたいこと ----------

// 下のメニューの切り替え
function showSection(name) {
  collectionArea.hidden = true;
  settingsArea.hidden = true;
  customizeArea.hidden = true;
  dailyArea.hidden = name !== "daily";
  wishArea.hidden = name !== "wish";
  groupArea.hidden = name !== "group";
  mypageArea.hidden = name !== "mypage";

  dailyTab.classList.toggle("active", name === "daily");
  wishTab.classList.toggle("active", name === "wish");
  groupTab.classList.toggle("active", name === "group");
  mypageTab.classList.toggle("active", name === "mypage");

  if (name === "daily") {
    showHome();
  }
  if (name === "wish") {
    loadWishes();
  }
  if (name === "group") {
    loadGroups();
  }
    if (name === "mypage") {
    loadMyPage();
  }
  window.scrollTo(0, 0);
}

groupTab.addEventListener("click", function () {
  showSection("group");
});

mypageTab.addEventListener("click", function () {
  showSection("mypage");
});

dailyTab.addEventListener("click", function () {
  showSection("daily");
});

wishTab.addEventListener("click", function () {
  showSection("wish");
});


// 投稿する
wishButton.addEventListener("click", async function () {
  const text = wishInput.value.trim();
  if (text === "") {
    return;
  }

  const { error } = await db.from("wishes").insert({ text: text });
  if (error) {
    alert("投稿できませんでした：" + error.message);
    return;
  }

  wishInput.value = "";
  loadWishes();
});

// 日時を「11/4」の形にする
function formatDate(iso) {
  const d = new Date(iso);
  return d.getMonth() + 1 + "/" + d.getDate();
}

// タイムラインを読み込んで表示する
async function loadWishes() {
  const { data: wishes, error: error1 } = await db
    .from("wishes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  const { data: profiles, error: error2 } = await db
    .from("profiles")
    .select("id, nickname");

  const { data: friendRows, error: error3 } = await db
    .from("friendships")
    .select("friend_id");

  if (error1 || error2 || error3) {
    alert("タイムラインを読み込めませんでした");
    return;
  }

  const friendIds = friendRows.map(function (row) {
    return row.friend_id;
  });

  function nicknameOf(userId) {
    const profile = profiles.find(function (p) {
      return p.id === userId;
    });
    if (profile) {
      return profile.nickname;
    }
    return "だれか";
  }

  // 表示する投稿を選ぶ
  const shown = wishes.filter(function (wish) {
    const isMine = wish.user_id === currentUser.id;
    if (viewMode === "mine") {
      return isMine;
    }
    if (viewMode === "friends") {
      return isMine || friendIds.includes(wish.user_id);
    }
    return true;
  });
  const ids = shown.map(function (w) {
    return w.id;
  });

  // いいねと、リウィッシュした人
  let likes = [];
  let rewishes = [];
  if (ids.length > 0) {
    const { data: likeRows } = await db
      .from("wish_likes")
      .select("wish_id, user_id")
      .in("wish_id", ids);
    if (likeRows) {
      likes = likeRows;
    }

    const { data: rewishRows } = await db
      .from("wishes")
      .select("user_id, rewish_of")
      .in("rewish_of", ids);
    if (rewishRows) {
      rewishes = rewishRows;
    }
  }

  // リウィッシュした投稿の、元の投稿（誰の投稿か）
  let originals = [];
  const originIds = shown
    .filter(function (w) {
      return w.rewish_of;
    })
    .map(function (w) {
      return w.rewish_of;
    });
  if (originIds.length > 0) {
    const { data: originRows } = await db
      .from("wishes")
      .select("id, user_id")
      .in("id", originIds);
    if (originRows) {
      originals = originRows;
    }
  }

  // 押した人の名前（フレンドは名前、それ以外は人数）
  function peopleText(userIds) {
    const names = [];
    let others = 0;
    userIds.forEach(function (uid) {
      if (uid === currentUser.id) {
        names.push("じぶん");
      } else if (friendIds.includes(uid)) {
        names.push(nicknameOf(uid));
      } else {
        others = others + 1;
      }
    });

    let text = names.join("、");
    if (others > 0) {
      if (text === "") {
        text = others + "人";
      } else {
        text = text + " ほか" + others + "人";
      }
    }
    return text;
  }

  wishData = {};
  wishList.innerHTML = "";

  shown.forEach(function (wish) {
    const isMine = wish.user_id === currentUser.id;

    const likeUsers = likes
      .filter(function (l) {
        return l.wish_id === wish.id;
      })
      .map(function (l) {
        return l.user_id;
      });
    const rewishUsers = rewishes
      .filter(function (r) {
        return r.rewish_of === wish.id;
      })
      .map(function (r) {
        return r.user_id;
      });
    const likedByMe = likeUsers.includes(currentUser.id);
    const rewishedByMe = rewishUsers.includes(currentUser.id);

    // ボタンを押したときのために、情報をとっておく
    wishData[wish.id] = {
      wish: wish,
      isMine: isMine,
      likedByMe: likedByMe,
      rewishedByMe: rewishedByMe,
    };

    const li = document.createElement("li");
    li.className = "wish";
    li.dataset.id = wish.id;
    if (wish.done) {
      li.classList.add("wish-done");
    }

    // 誰の投稿か
    const who = document.createElement("div");
    who.className = "wish-name";
    who.textContent = nicknameOf(wish.user_id) + " ・ " + formatDate(wish.created_at);
    li.appendChild(who);

    // リウィッシュした投稿なら、元の人の名前
    if (wish.rewish_of) {
      const original = originals.find(function (o) {
        return o.id === wish.rewish_of;
      });
      if (original) {
        const from = document.createElement("div");
        from.className = "wish-rewish";
        from.textContent = "🔁 " + nicknameOf(original.user_id) + " さんのやりたいことをリウィッシュ";
        li.appendChild(from);
      }
    }

    // 本文
    const body = document.createElement("div");
    if (wish.done) {
      body.textContent = "🎉 " + wish.text;
    } else {
      body.textContent = wish.text;
    }
    li.appendChild(body);

    // ボタンの列
    const actions = document.createElement("div");
    actions.className = "wish-actions";

    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    if (likedByMe) {
      likeButton.classList.add("liked");
      likeButton.textContent = "♥ " + likeUsers.length;
    } else {
      likeButton.textContent = "♡ " + likeUsers.length;
    }
    actions.appendChild(likeButton);

    const rewishButton = document.createElement("button");
    rewishButton.className = "rewish-button";
    if (isMine) {
      rewishButton.textContent = "⇄" + rewishUsers.length;
    } else if (rewishedByMe) {
      rewishButton.classList.add("rewished");
      rewishButton.textContent = "⇄ Rewished " + rewishUsers.length;
    } else {
      rewishButton.textContent = "⇄ Rewish " + rewishUsers.length;
    }
    actions.appendChild(rewishButton);

    // 自分の投稿にだけ、達成ボタンと削除ボタン
    if (isMine) {
      const doneButton = document.createElement("button");
      doneButton.className = "wish-done-button";
      if (wish.done) {
        doneButton.textContent = "未達成に戻す";
      } else {
        doneButton.textContent = "達成！";
      }
      actions.appendChild(doneButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "✕";
      deleteButton.className = "delete-button";
      li.appendChild(deleteButton);
    }

    li.appendChild(actions);

    // 押した人の名前
    if (likeUsers.length > 0) {
      const likePeople = document.createElement("div");
      likePeople.className = "wish-people";
      likePeople.textContent = "♥ " + peopleText(likeUsers);
      li.appendChild(likePeople);
    }
    if (rewishUsers.length > 0) {
      const rewishPeople = document.createElement("div");
      rewishPeople.className = "wish-people";
      rewishPeople.textContent = "🔁 " + peopleText(rewishUsers);
      li.appendChild(rewishPeople);
    }

    wishList.appendChild(li);
  });

  if (wishList.innerHTML === "") {
    const message = document.createElement("p");
    if (viewMode === "mine") {
      message.textContent = "まだ投稿がありません。やってみたいことを書いてみよう！";
    } else {
      message.textContent = "まだ投稿がありません。";
    }
    wishList.appendChild(message);
  }
}

// タイムラインのボタン（削除・達成・いいね・リウィッシュ）
wishList.addEventListener("click", async function (event) {
  const li = event.target.closest("li");
  if (!li) {
    return;
  }
  const id = Number(li.dataset.id);
  const info = wishData[id];
  if (!info) {
    return;
  }

  // 削除
  if (event.target.classList.contains("delete-button")) {
    if (!confirm("この投稿を削除しますか？")) {
      return;
    }
    const { error } = await db.from("wishes").delete().eq("id", id);
    if (error) {
      alert("削除できませんでした：" + error.message);
      return;
    }
    loadWishes();
    return;
  }

  // 達成・未達成
  if (event.target.classList.contains("wish-done-button")) {
    const { error } = await db
      .from("wishes")
      .update({ done: !info.wish.done })
      .eq("id", id);
    if (error) {
      alert("更新できませんでした：" + error.message);
      return;
    }
    loadWishes();
    return;
  }

  // いいね（もう押していたら取り消し）
  if (event.target.classList.contains("like-button")) {
    if (info.likedByMe) {
      await db
        .from("wish_likes")
        .delete()
        .eq("wish_id", id)
        .eq("user_id", currentUser.id);
    } else {
      await db.from("wish_likes").insert({ wish_id: id });
    }
    loadWishes();
    return;
  }

  // リウィッシュ
  if (event.target.classList.contains("rewish-button")) {
    if (info.isMine) {
      return;
    }
    if (info.rewishedByMe) {
      alert("もうリウィッシュしてるよ！");
      return;
    }

    // リウィッシュのリウィッシュなら、いちばん元の投稿につなげる
    let target = info.wish.id;
    if (info.wish.rewish_of) {
      target = info.wish.rewish_of;
    }

    const { error } = await db
      .from("wishes")
      .insert({ text: info.wish.text, rewish_of: target });

    if (error) {
      if (error.code === "23505") {
        alert("もうリウィッシュしてるよ！");
      } else if (error.code === "42501") {
        alert("自分のやりたいことはリウィッシュできないよ");
      } else {
        alert("リウィッシュできませんでした：" + error.message);
      }
      return;
    }

    alert("「" + info.wish.text + "」をリウィッシュしました！");
    loadWishes();
  }
});
// ---------- グループ ----------
// 選んでいるグループの名前を出す（2つ以上あるときだけ切りかえを出す）
function showGroupTitle() {
  const group = groups.find(function (g) {
    return g.id === currentGroupId;
  });
  if (group) {
    groupTitle.textContent = group.name;
  } else {
    groupTitle.textContent = "";
  }
  groupSelect.hidden = groups.length < 2;
}

// 自分のグループを読み込んで、選択欄を作る
async function loadGroups() {
  const { data, error } = await db
    .from("groups")
    .select("id, name, invite_code")
    .order("created_at");

  if (error) {
    alert("グループを読み込めませんでした：" + error.message);
    return;
  }

  groups = data;
  groupSelect.innerHTML = "";

  if (groups.length === 0) {
    groupCreateBox.classList.remove("closed");
    currentGroupId = null;
    noGroupMessage.hidden = false;
    groupContent.hidden = true;
    return;
  }

  noGroupMessage.hidden = true;
  groupContent.hidden = false;

  groups.forEach(function (g) {
    const option = document.createElement("option");
    option.value = g.id;
    option.textContent = g.name;
    groupSelect.appendChild(option);
  });

  // 選んでいたグループがなくなっていたら、最初のグループにする
  const stillThere = groups.find(function (g) {
    return g.id === currentGroupId;
  });
  if (!stillThere) {
    currentGroupId = groups[0].id;
  }
  groupSelect.value = currentGroupId;
  
  showGroupTitle();

  loadGroupWishes();
}

// 選んでいるグループのやりたいことを読み込む
async function loadGroupWishes() {
  if (currentGroupId === null) {
    return;
  }

  const { data: wishes, error: error1 } = await db
    .from("group_wishes")
    .select("*")
    .eq("group_id", currentGroupId)
    .order("created_at", { ascending: false });

  const { data: members, error: error2 } = await db
    .from("group_members")
    .select("user_id")
    .eq("group_id", currentGroupId);

  const { data: profiles, error: error3 } = await db
    .from("profiles")
    .select("id, nickname");

  if (error1 || error2 || error3) {
    alert("グループのリストを読み込めませんでした");
    return;
  }

  // IDからニックネームを探す（この関数の中だけで使う関数）
  function nicknameOf(userId) {
    if (userId === currentUser.id) {
      return "じぶん";
    }
    const profile = profiles.find(function (p) {
      return p.id === userId;
    });
    if (profile) {
      return profile.nickname;
    }
    return "だれか";
  }

  const names = members.map(function (m) {
    return nicknameOf(m.user_id);
  });
  groupMembers.textContent = "メンバー：" + names.join("、");

  // リアクション
  const ids = wishes.map(function (w) {
    return w.id;
  });
  const reactions = await getGroupReactions(ids, nicknameOf);

  groupWishData = {};
  groupWishList.innerHTML = "";

  wishes.forEach(function (wish) {
    let wishReactions = reactions[wish.id];
    if (!wishReactions) {
      wishReactions = [];
    }
    const mine = wishReactions.find(function (r) {
      return r.userId === currentUser.id;
    });
    const likes = wishReactions.filter(function (r) {
      return r.kind === "like";
    });
    const selfies = wishReactions.filter(function (r) {
      return r.kind === "selfie";
    });

    // ボタンを押したときのために、情報をとっておく
    groupWishData[wish.id] = { wish: wish, mine: mine, selfies: selfies };

        const li = document.createElement("li");
    li.className = "group-item";
    li.dataset.id = wish.id;
    if (wish.done) {
      li.classList.add("group-done");
    }

    // 文字（ここをタップすると、達成・未達成）
    const label = document.createElement("span");
    label.className = "task-label";
    label.textContent = wish.text;
    li.appendChild(label);

    if (wish.done) {
      // 達成したもの：届いた丸い自撮りと、🤳 ボタン
      li.appendChild(makeReactionBubbles(selfies));
      const selfieButton = document.createElement("button");
      selfieButton.className = "group-selfie-button";
      if (mine && mine.kind === "selfie") {
        selfieButton.textContent = "🤳✓";
        selfieButton.setAttribute("aria-label", "スナップを取り消す");
      } else {
        selfieButton.textContent = "🤳";
        selfieButton.setAttribute("aria-label", "スナップを送る");
      }
      li.appendChild(selfieButton);
    } else {
      // これからのもの：いいね
      const likeButton = document.createElement("button");
      likeButton.className = "like-button";
      if (mine && mine.kind === "like") {
        likeButton.classList.add("liked");
        likeButton.textContent = "♥ " + likes.length;
      } else {
        likeButton.textContent = "♡ " + likes.length;
      }
      li.appendChild(likeButton);
    }

    // 右はし：削除
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "×";
    deleteButton.className = "delete-button";
    li.appendChild(deleteButton);

    groupWishList.appendChild(li);
  });

  if (groupWishList.innerHTML === "") {
    const message = document.createElement("p");
    message.textContent = "まだ何もありません。みんなでやりたいことを書いてみよう！";
    groupWishList.appendChild(message);
  }
}
// 「＋ 新しいグループを作る」をタップ → 開く・閉じる
groupCreateToggle.addEventListener("click", function () {
  groupCreateBox.classList.toggle("closed");
  if (!groupCreateBox.classList.contains("closed")) {
    groupNameInput.focus();
  }
});
// グループを作る
createGroupButton.addEventListener("click", async function () {
  const name = groupNameInput.value.trim();
  if (name === "") {
    return;
  }

  const { data: newId, error } = await db.rpc("create_group", { group_name: name });
  if (error) {
    alert("グループを作れませんでした：" + error.message);
    return;
  }

  groupNameInput.value = "";
  groupCreateBox.classList.add("closed");
  currentGroupId = newId;
  loadGroups();
});

// グループを選び直したとき
groupSelect.addEventListener("change", function () {
  currentGroupId = Number(groupSelect.value);
  showGroupTitle();
  loadGroupWishes();
});

// やりたいことを追加
groupWishButton.addEventListener("click", async function () {
  const text = groupWishInput.value.trim();
  if (text === "" || currentGroupId === null) {
    return;
  }

  const { error } = await db
    .from("group_wishes")
    .insert({ group_id: currentGroupId, text: text });

  if (error) {
    alert("追加できませんでした：" + error.message);
    return;
  }

  groupWishInput.value = "";
  loadGroupWishes();
});

// グループのやりたいことをタップしたとき
groupWishList.addEventListener("click", async function (event) {
  const li = event.target.closest("li");
  if (!li) {
    return;
  }
  const id = Number(li.dataset.id);
  const info = groupWishData[id];
  if (!info) {
    return;
  }

  // 丸い自撮りを押したとき → 大きく見る
  if (event.target.classList.contains("reaction-selfie")) {
    const photos = info.selfies
      .filter(function (r) {
        return r.url;
      })
      .map(function (r) {
        return {
          url: r.url,
          caption: "🤳 " + info.wish.text,
          name: r.name,
          time: "",
          taskId: id,
          mine: true,
          round: true,
        };
      });
    const start = photos.findIndex(function (p) {
      return p.url === event.target.src;
    });
    openViewer(photos, start);
    return;
  }

  // 削除
  if (event.target.classList.contains("delete-button")) {
    if (!confirm("このやりたいことを削除しますか？")) {
      return;
    }
    const { error } = await db.from("group_wishes").delete().eq("id", id);
    if (error) {
      alert("削除できませんでした：" + error.message);
      return;
    }
    loadGroupWishes();
    return;
  }

  // いいね（もう押していたら取り消し）
  if (event.target.classList.contains("like-button")) {
    if (info.mine) {
      await db
        .from("group_wish_reactions")
        .delete()
        .eq("group_wish_id", id)
        .eq("user_id", currentUser.id);
    } else {
      const { error } = await db
        .from("group_wish_reactions")
        .insert({ group_wish_id: id, kind: "like" });
      if (error) {
        alert("いいねできませんでした：" + error.message);
        return;
      }
    }
    loadGroupWishes();
    return;
  }

  // スナップ（自撮り）を送る・取り消す
  if (event.target.classList.contains("group-selfie-button")) {
    if (info.mine && info.mine.kind === "selfie") {
      await removeGroupSelfie(id);
    } else {
      facingMode = "user";
      openCamera(id, "group-reaction");
    }
    return;
  }

  // 丸い自撮りのならびのすき間は、何もしない
  if (event.target.closest(".reactions")) {
    return;
  }

  // それ以外（文字のところ）→ 達成・未達成を切りかえる
  const { error } = await db
    .from("group_wishes")
    .update({ done: !info.wish.done })
    .eq("id", id);
  if (error) {
    alert("更新できませんでした：" + error.message);
    return;
  }
  loadGroupWishes();
});

// グループの招待リンクをコピー
groupInviteButton.addEventListener("click", async function () {
  const group = groups.find(function (g) {
    return g.id === currentGroupId;
  });
  if (!group) {
    return;
  }

  const link = window.location.origin + window.location.pathname + "?group=" + group.invite_code;
  await navigator.clipboard.writeText(link);
  alert("「" + group.name + "」の招待リンクをコピーしました！\n" + link);
});

// グループを抜ける
leaveGroupButton.addEventListener("click", async function () {
  if (!confirm("このグループを抜けますか？")) {
    return;
  }

  const { error } = await db
    .from("group_members")
    .delete()
    .eq("group_id", currentGroupId)
    .eq("user_id", currentUser.id);

  if (error) {
    alert("抜けられませんでした：" + error.message);
    return;
  }

  currentGroupId = null;
  loadGroups();
});

// 覚えておいたグループの招待コードを使って参加する
async function useGroupInvite() {
  const code = sessionStorage.getItem("groupInvite");
  if (!code) {
    return;
  }
  sessionStorage.removeItem("groupInvite");

  const { data: groupName, error } = await db.rpc("join_group_by_code", {
    invite_code: code,
  });

  if (error) {
    alert("グループに参加できませんでした：" + error.message);
    return;
  }

  alert("「" + groupName + "」に参加しました！");
  showSection("group");
}

// ---------- 達成の写真 ----------

// 達成・未達成を保存する
async function setDone(id, done) {
  const { error } = await db.from("tasks").update({ done: done }).eq("id", id);
  if (error) {
    alert("更新できませんでした：" + error.message);
    return;
  }
  loadTasks();
    if (done) {
    claimDecorations();
  }
}

// 達成の証拠（写真があれば写真、なければ💧）を作る
function makeProof(photo, caption) {
  if (photo) {
    const img = document.createElement("img");
    img.className = "task-photo";
    img.src = photo.url;
    img.alt = caption;
    img.dataset.caption = caption;
    return img;
  }
  const mark = document.createElement("span");
  mark.className = "task-proof";
  mark.textContent = "💧";
  return mark;
}

// 達成のしかたを選ぶメニュー
function openDoneMenu(task) {
  menuTaskId = task.id;
  doneMenuTitle.textContent = "【" + task.category + "】" + task.text;
  doneMenu.hidden = false;
}

donePhotoButton.addEventListener("click", function () {
  doneMenu.hidden = true;
  openCamera(menuTaskId, "proof");
});

doneNoPhotoButton.addEventListener("click", function () {
  doneMenu.hidden = true;
  setDone(menuTaskId, true);
});

doneCancelButton.addEventListener("click", function () {
  doneMenu.hidden = true;
});

// カメラを開く（mode は "proof" か "reaction"）
async function openCamera(taskId, mode) {
  cameraTaskId = taskId;
  cameraMode = mode;
     cameraArea.classList.toggle("round", mode !== "proof");
  cameraArea.hidden = false;
  await startCameraStream();
}

// カメラの映像を流し始める
async function startCameraStream() {
  stopCameraStream();
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode },
      audio: false,
    });
    cameraVideo.srcObject = cameraStream;
  } catch (e) {
    alert("カメラを使えませんでした：" + e.message);
    closeCamera();
  }
}

// カメラを止める
function stopCameraStream() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(function (track) {
      track.stop();
    });
    cameraStream = null;
  }
}

function closeCamera() {
  stopCameraStream();
  cameraArea.hidden = true;
  cameraTaskId = null;
}

cameraCancel.addEventListener("click", function () {
  closeCamera();
});

// 外カメラ ⇔ 内カメラ
cameraFlip.addEventListener("click", function () {
  if (facingMode === "environment") {
    facingMode = "user";
  } else {
    facingMode = "environment";
  }
  startCameraStream();
});

// シャッター
cameraShutter.addEventListener("click", async function () {
  const blob = await takePicture();
  const taskId = cameraTaskId;
  const mode = cameraMode;
  closeCamera();

  if (mode === "reaction") {
    await sendSelfieReaction(taskId, blob);
  } else if (mode === "group-reaction") {
    await sendGroupSelfie(taskId, blob);
  } else {
    await completeWithPhoto(taskId, blob);
  }
});

// 映像の今の1コマを、写真のデータにする
function takePicture() {
  let sx = 0;
  let sy = 0;
  let sw = cameraVideo.videoWidth;
  let sh = cameraVideo.videoHeight;
  let maxSize = 1080;

  // 自撮りリアクションのときは、まんなかを正方形に切り抜いて小さめにする
   if (cameraMode !== "proof") {
    const side = Math.min(sw, sh);
    sx = (sw - side) / 2;
    sy = (sh - side) / 2;
    sw = side;
    sh = side;
    maxSize = 480;
  }

  const scale = Math.min(1, maxSize / Math.max(sw, sh));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(sw * scale);
  canvas.height = Math.round(sh * scale);
  canvas.getContext("2d").drawImage(cameraVideo, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

  return new Promise(function (resolve) {
    canvas.toBlob(resolve, "image/jpeg", 0.8);
  });
}

// 写真を保存して、タスクを達成にする
async function completeWithPhoto(taskId, blob) {
  const path = currentUser.id + "/" + taskId + ".jpg";

  // 念のため、同じ名前の古い写真があれば消しておく
  await db.storage.from("task-photos").remove([path]);

  const { error: uploadError } = await db.storage
    .from("task-photos")
    .upload(path, blob, { contentType: "image/jpeg" });

  if (uploadError) {
    alert("写真を保存できませんでした：" + uploadError.message);
    return;
  }

  const { error: photoError } = await db
    .from("task_photos")
    .insert({ task_id: taskId, path: path });

  if (photoError) {
    alert("写真の記録に失敗しました：" + photoError.message);
    return;
  }

  setDone(taskId, true);
}

// タスクのIDから、写真の見られるURLをまとめて取ってくる
async function getPhotos(taskIds) {
  const result = {};
  if (taskIds.length === 0) {
    return result;
  }

  const { data: rows, error } = await db
    .from("task_photos")
    .select("task_id, path")
    .in("task_id", taskIds);

  if (error || rows.length === 0) {
    return result;
  }

  const paths = rows.map(function (row) {
    return row.path;
  });

  const { data: signed, error: signError } = await db.storage
    .from("task-photos")
    .createSignedUrls(paths, 60 * 60);

  if (signError) {
    return result;
  }

  rows.forEach(function (row) {
    const s = signed.find(function (item) {
      return item.path === row.path;
    });
    if (s) {
      result[row.task_id] = { path: row.path, url: s.signedUrl };
    }
  });

  return result;
}

// ---------- 写真を全画面で見る ----------

// 達成した順に並べるためのルール
function byCompletedAt(a, b) {
  if (a.completed_at < b.completed_at) {
    return -1;
  }
  if (a.completed_at > b.completed_at) {
    return 1;
  }
  return 0;
}

// 時刻を「7:30」の形にする
function formatTime(iso) {
  if (!iso) {
    return "";
  }
  const d = new Date(iso);
  return d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
}

// 自分の写真を、全画面表示用の形にまとめる
function myViewerPhotos() {
  return tasks
    .filter(function (t) {
      return t.photo;
    })
    .sort(byCompletedAt)
    .map(function (task) {
      let caption = "【" + task.category + "】" + task.text;
      if (task.is_private) {
        caption = "🗝 " + caption;
      }
      return {
        url: task.photo.url,
        caption: caption,
        name: "じぶん",
        time: formatTime(task.completed_at),
        taskId: task.id,
        mine: true,
      };
    });
}

// フレンドの写真を、全画面表示用の形にまとめる
function toViewerPhotos(taskList, name, photos) {
  return taskList.map(function (task) {
    let caption = "【" + task.category + "】" + task.text;
    if (task.is_private) {
      caption = "【" + task.category + "】ひみつ！";
    }
    return {
      url: photos[task.id].url,
      caption: caption,
      name: name,
      time: formatTime(task.completed_at),
      taskId: task.id,
      mine: false,
    };
  });
}

// 自分がもう見た写真のタスクIDを取ってくる
async function getSeenIds(taskIds) {
  if (taskIds.length === 0) {
    return [];
  }
  const { data, error } = await db
    .from("photo_views")
    .select("task_id")
    .in("task_id", taskIds);

  if (error) {
    return [];
  }
  return data.map(function (row) {
    return row.task_id;
  });
}

// 「見た」を記録する
async function markViewed(taskId) {
  await db
    .from("photo_views")
    .upsert({ user_id: currentUser.id, task_id: taskId }, { ignoreDuplicates: true });
}

// 全画面表示を開く
function openViewer(photos, startIndex) {
  if (photos.length === 0) {
    return;
  }
  viewerPhotos = photos;
  viewerIndex = Math.max(0, startIndex);
  photoViewer.hidden = false;
  showViewerPhoto();
}

// 今の1枚を表示して、3秒後に次へ
function showViewerPhoto() {
  clearTimeout(viewerTimer);

  const p = viewerPhotos[viewerIndex];
  viewerImage.src = p.url;
  viewerCaption.textContent = p.caption;
   viewerReactions.hidden = p.mine;
   viewerImage.classList.toggle("round", p.round === true);
  viewerInfo.textContent =
    p.name + " ・ " + p.time + "　" + (viewerIndex + 1) + " / " + viewerPhotos.length;

  if (!p.mine) {
    markViewed(p.taskId);
  }

  viewerTimer = setTimeout(nextPhoto, 3000);
}

function nextPhoto() {
  if (viewerIndex >= viewerPhotos.length - 1) {
    closeViewer();
    return;
  }
  viewerIndex = viewerIndex + 1;
  showViewerPhoto();
}

function prevPhoto() {
  if (viewerIndex > 0) {
    viewerIndex = viewerIndex - 1;
  }
  showViewerPhoto();
}

function closeViewer() {
  clearTimeout(viewerTimer);
  photoViewer.hidden = true;
  loadEveryone(); // 新着マークを更新する
}

// 画面の左半分 → 前へ、右半分 → 次へ、✕ → 閉じる、下の絵文字 → リアクション
photoViewer.addEventListener("click", function (event) {
  if (event.target === viewerClose) {
    closeViewer();
    return;
  }

  // リアクションの列の中が押されたとき
  if (event.target.closest(".viewer-reactions")) {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    const p = viewerPhotos[viewerIndex];

    if (event.target === viewerSelfie) {
      closeViewer();
      facingMode = "user";
      openCamera(p.taskId, "reaction");
      return;
    }

    sendReaction(p.taskId, "emoji", event.target.textContent, null);
    const button = event.target;
    button.classList.add("pop");
    setTimeout(function () {
      button.classList.remove("pop");
    }, 400);
    return;
  }

  if (event.clientX < window.innerWidth / 2) {
    prevPhoto();
  } else {
    nextPhoto();
  }
});

// ---------- リアクション ----------

// 自撮りリアクションの置き場所
function selfiePath(taskId) {
  return currentUser.id + "/reactions/" + taskId + ".jpg";
}

// タスクのIDから、リアクションをまとめて取ってくる（送った人の名前と自撮りのURLつき）
async function getReactions(taskIds) {
  const result = {};
  if (taskIds.length === 0) {
    return result;
  }

  const { data: rows, error } = await db
    .from("task_reactions")
    .select("*")
    .in("task_id", taskIds)
    .order("created_at");

  if (error || rows.length === 0) {
    return result;
  }

  // 送った人のニックネーム
  const userIds = rows.map(function (r) {
    return r.user_id;
  });
  const { data: people } = await db
    .from("profiles")
    .select("id, nickname")
    .in("id", userIds);

  // 自撮りの見られるURL
  const paths = rows
    .filter(function (r) {
      return r.kind === "selfie";
    })
    .map(function (r) {
      return r.photo_path;
    });
  let signed = [];
  if (paths.length > 0) {
    const { data } = await db.storage
      .from("task-photos")
      .createSignedUrls(paths, 60 * 60);
    if (data) {
      signed = data;
    }
  }

  rows.forEach(function (row) {
    let name = "だれか";
    if (people) {
      const person = people.find(function (p) {
        return p.id === row.user_id;
      });
      if (person) {
        name = person.nickname;
      }
    }

    let url = null;
    if (row.kind === "selfie") {
      const s = signed.find(function (item) {
        return item.path === row.photo_path;
      });
      if (s) {
        url = s.signedUrl;
      }
    }

    if (!result[row.task_id]) {
      result[row.task_id] = [];
    }
    result[row.task_id].push({
      userId: row.user_id,
      kind: row.kind,
      emoji: row.emoji,
      url: url,
      name: name,
    });
  });

  return result;
}

// リアクションを丸く並べる（3つまで＋残りの数）
function makeReactionBubbles(reactions) {
  const box = document.createElement("span");
  box.className = "reactions";
  if (!reactions || reactions.length === 0) {
    return box;
  }

  reactions.slice(0, 3).forEach(function (r) {
    if (r.kind === "selfie" && r.url) {
      const img = document.createElement("img");
      img.className = "reaction-bubble reaction-selfie";
      img.src = r.url;
      img.alt = r.name;
      box.appendChild(img);
    } else {
      const bubble = document.createElement("span");
      bubble.className = "reaction-bubble";
      bubble.textContent = reactionIcon(r);
      box.appendChild(bubble);
    }
  });

  if (reactions.length > 3) {
    const more = document.createElement("span");
    more.className = "reaction-more";
    more.textContent = "+" + (reactions.length - 3);
    box.appendChild(more);
  }

  return box;
}

// リアクションの見た目の文字
function reactionIcon(r) {
  if (r.kind === "cheer") {
    return "📣";
  }
  if (r.kind === "selfie") {
    return "🤳";
  }
  if (r.kind === "like") {
    return "♥";
  }
  return r.emoji;
}

// 誰から何が届いたかを見せる
function showWho(reactions) {
  if (!reactions || reactions.length === 0) {
    return;
  }
  const lines = reactions.map(function (r) {
    return r.name + "：" + reactionIcon(r);
  });
  alert(lines.join("\n"));
}

// リアクションのメニューを開く
function openReactionMenu(task, mine) {
  reactionTaskId = task.id;
  if (task.is_private) {
    reactionTitle.textContent = "【" + task.category + "】ひみつ！";
  } else {
    reactionTitle.textContent = "【" + task.category + "】" + task.text;
  }

  // 達成したタスクには絵文字と自撮り、まだのタスクには応援
  reactionEmojis.hidden = !task.done;
  reactionSelfie.hidden = !task.done;
  reactionCheer.hidden = task.done;
  reactionRemove.hidden = !mine;

  reactionMenu.hidden = false;
}

// リアクションを送る（もう送っていたら、新しいものに変わる）
async function sendReaction(taskId, kind, emoji, photoPath) {
  // 自撮り以外に変えるときは、前の自撮りを消しておく
  if (kind !== "selfie") {
    await db.storage.from("task-photos").remove([selfiePath(taskId)]);
  }

  const { error } = await db.from("task_reactions").upsert({
    task_id: taskId,
    user_id: currentUser.id,
    kind: kind,
    emoji: emoji,
    photo_path: photoPath,
  });

  if (error) {
    alert("リアクションを送れませんでした：" + error.message);
    return;
  }
  loadEveryone();
}

// 自撮りを保存して、リアクションとして送る
async function sendSelfieReaction(taskId, blob) {
  const path = selfiePath(taskId);
  await db.storage.from("task-photos").remove([path]);

  const { error } = await db.storage
    .from("task-photos")
    .upload(path, blob, { contentType: "image/jpeg" });

  if (error) {
    alert("自撮りを保存できませんでした：" + error.message);
    return;
  }
  sendReaction(taskId, "selfie", null, path);
}

// メニューのボタン
reactionEmojis.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  reactionMenu.hidden = true;
  sendReaction(reactionTaskId, "emoji", event.target.textContent, null);
});

reactionCheer.addEventListener("click", function () {
  reactionMenu.hidden = true;
  sendReaction(reactionTaskId, "cheer", null, null);
});

reactionSelfie.addEventListener("click", function () {
  reactionMenu.hidden = true;
  facingMode = "user";
  openCamera(reactionTaskId, "reaction");
});

reactionRemove.addEventListener("click", async function () {
  reactionMenu.hidden = true;
  await db.storage.from("task-photos").remove([selfiePath(reactionTaskId)]);
  const { error } = await db
    .from("task_reactions")
    .delete()
    .eq("task_id", reactionTaskId)
    .eq("user_id", currentUser.id);

  if (error) {
    alert("取り消せませんでした：" + error.message);
    return;
  }
  loadEveryone();
});

reactionCancel.addEventListener("click", function () {
  reactionMenu.hidden = true;
});

// ---------- その場に広がるリアクション ----------

// 押した場所の近くに、選択肢を広げる
function openReactionPicker(anchor, task, mine) {
  reactionTaskId = task.id;
  reactionPicker.innerHTML = "";

  // 達成したタスクには絵文字と自撮り、まだのタスクには応援
  let options = [];
  if (task.done) {
    options = EMOJIS.concat(["🤳"]);
  } else {
    options = ["📣"];
  }
  // もう送っていたら、取り消しも出す
  if (mine) {
    options.push("✕");
  }

  options.forEach(function (icon) {
    const button = document.createElement("button");
    button.textContent = icon;
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      closeReactionPicker();
      pickReaction(icon);
    });
    reactionPicker.appendChild(button);
  });

  // いったん表示して大きさを測ってから、マークのすぐ上に置く
  reactionPicker.hidden = false;
  const rect = anchor.getBoundingClientRect();

  let left = rect.right - reactionPicker.offsetWidth;
  if (left < 8) {
    left = 8;
  }
  let top = rect.top - reactionPicker.offsetHeight - 6;
  if (top < 8) {
    top = rect.bottom + 6; // 上に入りきらないときは下に出す
  }

  reactionPicker.style.left = left + "px";
  reactionPicker.style.top = top + "px";
}

function closeReactionPicker() {
  reactionPicker.hidden = true;
}

// 選んだものに合わせて送る
function pickReaction(icon) {
  if (icon === "📣") {
    sendReaction(reactionTaskId, "cheer", null, null);
  } else if (icon === "🤳") {
    facingMode = "user";
    openCamera(reactionTaskId, "reaction");
  } else if (icon === "✕") {
    removeReaction(reactionTaskId);
  } else {
    sendReaction(reactionTaskId, "emoji", icon, null);
  }
}

// リアクションを取り消す
async function removeReaction(taskId) {
  await db.storage.from("task-photos").remove([selfiePath(taskId)]);
  const { error } = await db
    .from("task_reactions")
    .delete()
    .eq("task_id", taskId)
    .eq("user_id", currentUser.id);

  if (error) {
    alert("取り消せませんでした：" + error.message);
    return;
  }
  loadEveryone();
}

// 選択肢の外を押したら閉じる
document.addEventListener("click", function (event) {
  if (!reactionPicker.hidden && !reactionPicker.contains(event.target)) {
    closeReactionPicker();
  }
});

// スクロールしたら閉じる（場所がずれるので）
window.addEventListener("scroll", closeReactionPicker);

// ---------- グループのリアクション ----------

// グループの自撮りの置き場所
function groupSelfiePath(wishId) {
  return currentUser.id + "/group-reactions/" + wishId + ".jpg";
}

// グループのやりたいことのリアクションを、まとめて取ってくる
async function getGroupReactions(wishIds, nicknameOf) {
  const result = {};
  if (wishIds.length === 0) {
    return result;
  }

  const { data: rows, error } = await db
    .from("group_wish_reactions")
    .select("*")
    .in("group_wish_id", wishIds)
    .order("created_at");

  if (error || rows.length === 0) {
    return result;
  }

  // 自撮りの見られるURL
  const paths = rows
    .filter(function (r) {
      return r.kind === "selfie";
    })
    .map(function (r) {
      return r.photo_path;
    });
  let signed = [];
  if (paths.length > 0) {
    const { data } = await db.storage
      .from("task-photos")
      .createSignedUrls(paths, 60 * 60);
    if (data) {
      signed = data;
    }
  }

  rows.forEach(function (row) {
    let url = null;
    if (row.kind === "selfie") {
      const s = signed.find(function (item) {
        return item.path === row.photo_path;
      });
      if (s) {
        url = s.signedUrl;
      }
    }

    if (!result[row.group_wish_id]) {
      result[row.group_wish_id] = [];
    }
    result[row.group_wish_id].push({
      userId: row.user_id,
      kind: row.kind,
      emoji: null,
      url: url,
      name: nicknameOf(row.user_id),
    });
  });

  return result;
}

// 自撮りのスナップを保存して送る
async function sendGroupSelfie(wishId, blob) {
  const path = groupSelfiePath(wishId);
  await db.storage.from("task-photos").remove([path]);

  const { error: uploadError } = await db.storage
    .from("task-photos")
    .upload(path, blob, { contentType: "image/jpeg" });

  if (uploadError) {
    alert("スナップを保存できませんでした：" + uploadError.message);
    return;
  }

  // 前のリアクション（いいね）があれば消してから、スナップを記録する
  await db
    .from("group_wish_reactions")
    .delete()
    .eq("group_wish_id", wishId)
    .eq("user_id", currentUser.id);

  const { error } = await db
    .from("group_wish_reactions")
    .insert({ group_wish_id: wishId, kind: "selfie", photo_path: path });

  if (error) {
    alert("スナップを送れませんでした：" + error.message);
    return;
  }
  loadGroupWishes();
}

// スナップを取り消す
async function removeGroupSelfie(wishId) {
  await db.storage.from("task-photos").remove([groupSelfiePath(wishId)]);
  const { error } = await db
    .from("group_wish_reactions")
    .delete()
    .eq("group_wish_id", wishId)
    .eq("user_id", currentUser.id);

  if (error) {
    alert("取り消せませんでした：" + error.message);
    return;
  }
  loadGroupWishes();
}

// ---------- 通知 ----------

// 30日前の日時
function thirtyDaysAgo() {
  return new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
}

// 🔔の数を更新する
async function updateBell() {
  const { count } = await db
    .from("notifications")
    .select("id", { count: "exact", head: true })
    .eq("read", false)
    .gte("created_at", thirtyDaysAgo());

  if (count && count > 0) {
    bellBadge.hidden = false;
    if (count > 99) {
      bellBadge.textContent = "99+";
    } else {
      bellBadge.textContent = count;
    }
  } else {
    bellBadge.hidden = true;
  }
}

// お知らせの一覧を開く
async function openNotifications() {
  const { data, error } = await db
    .from("notifications")
    .select("*")
    .gte("created_at", thirtyDaysAgo())
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    alert("お知らせを読み込めませんでした：" + error.message);
    return;
  }

  notificationList.innerHTML = "";

  data.forEach(function (n) {
    const li = document.createElement("li");
    li.className = "notification";
    if (!n.read) {
      li.classList.add("unread");
    }

    const message = document.createElement("div");
    message.textContent = n.message;
    li.appendChild(message);

    const time = document.createElement("div");
    time.className = "notification-time";
    time.textContent = formatDate(n.created_at) + " " + formatTime(n.created_at);
    li.appendChild(time);

    // 押すと、その場所へ移動
    li.addEventListener("click", function () {
      notificationPanel.hidden = true;
      goToNotification(n);
    });

    notificationList.appendChild(li);
  });

  if (data.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "お知らせはまだありません";
    notificationList.appendChild(empty);
  }

  notificationPanel.hidden = false;

  // 開いたら全部既読にする
  await db.from("notifications").update({ read: true }).eq("read", false);
  updateBell();
}

// お知らせの場所へ移動する
function goToNotification(n) {
  if (n.target === "daily") {
    showSection("daily");
    if (n.target_date) {
      changeDate(n.target_date);
    }
  } else if (n.target === "wish") {
    showSection("wish");
  } else if (n.target === "group") {
    if (n.group_id) {
      currentGroupId = n.group_id;
    }
    showSection("group");
  }
}

// 画面の上にすっと出して、3.5秒で消す
function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.hidden = true;
  }, 3500);
}

bellButton.addEventListener("click", function () {
  openNotifications();
});

notificationClose.addEventListener("click", function () {
  notificationPanel.hidden = true;
});

toast.addEventListener("click", function () {
  toast.hidden = true;
  openNotifications();
});

// ---------- 通知の設定 ----------

async function openSettings() {
  const { data } = await db
    .from("notification_settings")
    .select("*")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  // まだ設定を作っていなければ、最初の設定
  let s = data;
  if (!s) {
    s = {
      first_task: true,
      progress_levels: [20, 50, 80, 100],
      reactions: true,
      wishes: true,
      groups: true,
    };
  }

  setFirstTask.checked = s.first_task;
  setReactions.checked = s.reactions;
  setWishes.checked = s.wishes;
  setGroups.checked = s.groups;

  // 10%〜100%のチェックボックスを作る
  levelChecks.innerHTML = "";
  LEVELS.forEach(function (lvl) {
    const label = document.createElement("label");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.value = lvl;
    box.checked = s.progress_levels.includes(lvl);
    label.appendChild(box);
    label.append(" " + lvl + "%");
    levelChecks.appendChild(label);
  });

  notificationPanel.hidden = true;
  settingsPanel.hidden = false;
}

notificationSettingsButton.addEventListener("click", function () {
  openSettings();
});

settingsCancel.addEventListener("click", function () {
  settingsPanel.hidden = true;
});

settingsSave.addEventListener("click", async function () {
  // チェックが入っている%だけを集める
  const checked = Array.from(levelChecks.querySelectorAll("input:checked"));
  const levels = checked.map(function (box) {
    return Number(box.value);
  });

  const { error } = await db.from("notification_settings").upsert({
    user_id: currentUser.id,
    first_task: setFirstTask.checked,
    progress_levels: levels,
    reactions: setReactions.checked,
    wishes: setWishes.checked,
    groups: setGroups.checked,
  });

  if (error) {
    alert("保存できませんでした：" + error.message);
    return;
  }
  settingsPanel.hidden = true;
  alert("通知の設定を保存しました");
});