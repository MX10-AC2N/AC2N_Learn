// === BASE DE DONNÉES STRUCTURÉE EN SOUS-CATÉGORIES ===
const db = {
  "fundamentals": {
    "Base": [
      { "action": "Allumer/éteindre la console", "cmd": "[ON] → [OFF]", "keys": ["[ON]", "[OFF]"], "level": "basic" },
      { "action": "Créer un nouveau show", "cmd": "Setup → User → New Show", "keys": ["Setup", "User", "New Show"], "level": "basic" },
      { "action": "Ouvrir un show existant", "cmd": "Setup → User → Open Show", "keys": ["Setup", "User", "Open Show"], "level": "basic" },
      { "action": "Sauvegarder le show", "cmd": "Update", "keys": ["Update"], "level": "basic" },
      { "action": "Sauvegarder (raccourci)", "cmd": "Ctrl+S", "keys": ["Ctrl+S"], "level": "basic" },
      { "action": "Annuler la dernière action", "cmd": "Undo", "keys": ["Ctrl+Z"], "level": "basic" },
      { "action": "Rétablir", "cmd": "Redo", "keys": ["Ctrl+Y"], "level": "basic" },
      { "action": "Aide contextuelle", "cmd": "Help", "keys": ["Help"], "level": "basic" },
      { "action": "Sélectionner le canal 1", "cmd": "Chan 1 Enter", "keys": ["Chan", "1", "Enter"], "level": "basic" },
      { "action": "Sélectionner canaux 1, 5 et 8", "cmd": "Chan 1 + 5 + 8 Enter", "keys": ["Chan", "1", "+", "5", "+", "8", "Enter"], "level": "basic" },
      { "action": "Sélectionner canaux 1 à 10", "cmd": "Chan 1 Thru 10 Enter", "keys": ["Chan", "1", "Thru", "10", "Enter"], "level": "basic" },
      { "action": "Sélectionner tous les canaux", "cmd": "Chan * Enter", "keys": ["Chan", "*", "Enter"], "level": "basic" },
      { "action": "Sélectionner le groupe 1", "cmd": "Group 1 Enter", "keys": ["Group", "1", "Enter"], "level": "basic" },
      { "action": "Intensité du canal 1 à 100%", "cmd": "Chan 1 @ 100 Enter", "keys": ["Chan", "1", "@", "100", "Enter"], "level": "basic" },
      { "action": "Intensité du canal 1 à 100% (Full)", "cmd": "Chan 1 @ Full Enter", "keys": ["Chan", "1", "@", "Full", "Enter"], "level": "basic" }
      // ... (toutes les autres commandes suivent)
    ]
  },
  // ... (toutes les autres catégories : selection, intensity, cues, timing, palettes, etc.)
};
