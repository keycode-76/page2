// data/user_instant.js

let insData = {
    now_slot: 0, // now slot
    now_hint: 0,
    curr_scene: "battle",
    curr_key: 49,

    curr_boss: { id: "boss_0", name: "PT guy", blood: 5, reward: 0, }, // boss
    boss_code: [{ content: "input", done: false }],

    key_battle: [], // code keyBoard
    key_getCoin: 0,
    codeLength_is0: true,
    targetKey_index: 0,
    targetEquip_index: 0,
    targetMdse_index: 0,
};

export { insData };
