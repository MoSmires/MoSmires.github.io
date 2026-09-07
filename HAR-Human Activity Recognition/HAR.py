#-----------------------------Imports-------------------------------------------------------#
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn import svm,model_selection
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report
from sklearn.linear_model import Perceptron
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
from sklearn.pipeline import Pipeline
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.neural_network import MLPClassifier
from collections import Counter
from sklearn.decomposition import PCA
#----------------------------Extraction et Pré-traitement des données-----------------------#
# Chemins d'accès aux fichiers train et test
train_path ='train.csv'
test_path='test.csv'

# Fonction qui permet de convertir les données du fichier csv en vecteurs numpy
def convertir_csv_numpy(path_csv):
    df=pd.read_csv(path_csv)
    array = df.values
    return array

# Fonction pour afficher la matrice de confusion
def afficher_matrice_confusion(y_true, y_pred, classes, title):
    cm = confusion_matrix(y_true, y_pred)
    plt.figure(figsize=(10, 8))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
                xticklabels=classes, yticklabels=classes)
    plt.title(title)
    plt.ylabel('Vraie étiquette')
    plt.xlabel('Prédiction')
    plt.show()

def Calcul_iterations(y):
    print(Counter(y))
    return Counter(y)

# Extraction des données d'entraînement et de test

# La matrice de données d'entraînements est de dimension (7352,563), 
#Les 7352 lignes correspondent aux observations et les 563 colonnes sont composés des attributs: (voir Rapport RCP209)

Train_data=convertir_csv_numpy(train_path)
print("Dimension de la matrice des données brutes d'entraînement",np.shape(convertir_csv_numpy(train_path)))
# La matrice de données de test de dimension (2947,563), 
Test_data=convertir_csv_numpy(test_path)
print("Dimension de la matrice des données brutes de test",np.shape(convertir_csv_numpy(test_path)))
# Extraction de train data sauf les deux dernières colonnes On utilise astype(float) pour s'assurer que les données sont numériques.
X_train = Train_data[:, :-2].astype(float)
# Extraction de la dernière colonne qui correspond aux labels
y_train=Train_data[:,-1]
# Extraction de test data sauf les deux dernières colonnes On utilise astype(float) pour s'assurer que les données sont numériques.
X_test = Test_data[:, :-2].astype(float)
# Extraction de la dernière colonne qui correspond aux labels
y_test=Test_data[:,-1]

#---------------------------Analyse des données-----------------------#
Calcul_iterations(y_train)
Calcul_iterations(y_test)
#----------------------------Encodage des labels-----------------------#

# Encoder les labels([LAYING,STANDING,WALKING,SITTING,WALKING_UPSTAIRS]=[0,1,2,3,4])
encoder = LabelEncoder()
y_train_encoded = encoder.fit_transform(y_train)
y_test_encoded = encoder.transform(y_test)

# Afficher le mapping pour comprendre la correspondance
print("\n--- Mapping des Étiquettes ---")
for i, label in enumerate(encoder.classes_):
    print(f"La catégorie '{label}' est encodée par l'entier {i}")

#----------------------------PCA--------------------------------------#
# Initialiser la PCA pour garder 2 composantes
pca = PCA(n_components=2)
# Appliquer la PCA sur vos variables explicatives (X)
X_train_pca = pca.fit_transform(X_train)
# Créer le graphique
plt.figure(figsize=(16, 9))
sns.scatterplot(x=X_train_pca[:, 0], y=X_train_pca[:, 1], hue=y_train, palette='bright', alpha=0.7)
plt.title("Visualisation des activités en 2D via PCA")
plt.xlabel("Composante Principale 1")
plt.ylabel("Composante Principale 2")
plt.legend(title="Activités", bbox_to_anchor=(0.8, 1), loc='upper left')
plt.grid(True, alpha=0.3)
#plt.show()


#------------------------------Apprentissage et prédiction-----------------#

#--------------------------------Random Forest--------------------------------#

rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train_encoded)
y_pred_rf = rf_model.predict(X_test)
acc_rf=accuracy_score(y_test_encoded, y_pred_rf)

# Évaluation de la performance

print("\n----------------------------------------------------")
print(f"Précision Random forest (sur les données de test) : {acc_rf:.4f}")
print("----------------------------------------------------")
print("\nRapport de Classification Random forest :\n")
print(classification_report(y_test_encoded, y_pred_rf))

# Afficher la matrice de confusion
afficher_matrice_confusion(y_test_encoded, y_pred_rf, encoder.classes_, "Matrice de Confusion de la forêt aléatoire")

# Extraction de l'importance des caractéristiques (Mesure de Gini)
importances = rf_model.feature_importances_
feature_names=(pd.read_csv("train.csv").columns)[:-2]
feature_importance_df = pd.DataFrame({'Attribut': feature_names, 'Importance': importances})

# Tri par importance décroissante
feature_importance_df = feature_importance_df.sort_values(by='Importance', ascending=False)

# Affichage du top 20 des attributs les plus discriminants
plt.figure(figsize=(20, 6))
plt.barh(feature_importance_df['Attribut'][:20], feature_importance_df['Importance'][:20], color='skyblue')
plt.xlabel('Importance de Gini')
plt.title('Top 20 des caractéristiques les plus importantes (Activité Humaine)')
plt.gca().invert_yaxis()
#plt.show()

#Ré-entraînement du modèle avec les 20 attributs les plus discriminants

rf_model_top20 = RandomForestClassifier(n_estimators=100, random_state=42)

#Extraction des attributs
Attributs_top20=feature_importance_df['Attribut'][:20].tolist()
indices_top20 = [feature_names.tolist().index(name) for name in Attributs_top20]
# Reconstruction de X_train et X_test
X_train_top20 = X_train[:, indices_top20]
X_test_top20 = X_test[:, indices_top20]

rf_model_top20.fit(X_train_top20, y_train_encoded)
y_pred_rf_top20 = rf_model_top20.predict(X_test_top20)
acc_rf_top20=accuracy_score(y_test_encoded, y_pred_rf_top20)

# Évaluation de la performance

print("\n----------------------------------------------------")
print(f"Précision Random forst sur top 20 (sur les données de test) : {acc_rf_top20:.4f}")
print("----------------------------------------------------")
print("\nRapport de Classification Random forest top 20 :\n")
print(classification_report(y_test_encoded, y_pred_rf_top20))


#--------------------------------Perceptron--------------------------------#
perc=Perceptron()
perc.fit(X_train, y_train_encoded)
y_pred_perc = perc.predict(X_test)
acc_perc = accuracy_score(y_test_encoded, y_pred_perc)

print("\n----------------------------------------------------")
print(f"Précision Perceptron (sur les données de test) : {acc_perc:.4f}")
print("----------------------------------------------------")
print("\nRapport de Classification Perceptron :\n")
print(classification_report(y_test_encoded, y_pred_perc))

# Afficher la matrice de confusion pour le Perceptron
afficher_matrice_confusion(y_test_encoded, y_pred_perc, encoder.classes_, "Matrice de Confusion : Perceptron")

#---------------------------------MLP----------------------------------------#

# Définition du Pipeline 

mlp_pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('mlp', MLPClassifier(max_iter=500, random_state=42))
])

# Définition de la Grille de Paramètres
# On teste différentes architectures de couches cachées
param_grid_mlp = {
    'mlp__hidden_layer_sizes': [(50,), (100,), (100, 50), (50, 25)], 
    'mlp__activation': ['relu'],
    'mlp__alpha': [0.0001, 0.05, 0.1], # Paramètre de régularisation pour éviter l'overfitting
}

# Recherche par Grille 
print("--- Optimisation du MLP (Grid Search) ---")
grid_mlp = GridSearchCV(
    mlp_pipe, 
    param_grid_mlp, 
    cv=3, 
    n_jobs=-1, 
    verbose=2
)

grid_mlp.fit(X_train, y_train_encoded)

# Résultats 
best_mlp = grid_mlp.best_estimator_
y_pred_mlp = best_mlp.predict(X_test)

acc_mlp = accuracy_score(y_test_encoded, y_pred_mlp)

print(f"\nMeilleure architecture : {grid_mlp.best_params_}")
print("\n----------------------------------------------------")
print(f"Précision Perceptron multicouches (sur les données de test) : {acc_mlp:.4f}")
print("----------------------------------------------------")
print("\nRapport de Classification Perceptron multicouches:\n")
print(classification_report(y_test_encoded, y_pred_mlp))

afficher_matrice_confusion(y_test_encoded, y_pred_mlp, encoder.classes_, "Matrice de Confusion : Perceptron multicouches")

#---------------------------------SVM----------------------------------------#

# Pipeline 
svm_pipe = Pipeline([
    ('scaler', StandardScaler()), # Ajout crucial pour le SVM
    ('svm', SVC(random_state=42))
])
#  Définition de la Grille de Paramètres
param_grid = {
    'svm__C': [0.01, 0.1, 1, 10, 100],  # Une plage plus raisonnable pour C
    'svm__gamma': [0.001, 0.01, 0.1, 'scale'] # Ajout de gamma (pour le noyau RBF)
}

# Recherche par Grille (Grid Search) 
print("--- 1. SVM (Recherche par Grille) ---")
grid_search = GridSearchCV(
    estimator=svm_pipe,           
    param_grid=param_grid,
    scoring='accuracy',
    cv=3,                         
    n_jobs=-1,                    
    verbose=2
)

grid_search.fit(X_train, y_train_encoded)

y_pred_svm = grid_search.predict(X_test)
acc_svm = accuracy_score(y_test_encoded, y_pred_svm)

print("\n----------------------------------------------------")
print(f"Meilleurs paramètres trouvés (C, gamma) : {grid_search.best_params_}")
print(f"Meilleur score de CV (sur l'ensemble d'entraînement) : {grid_search.best_score_:.4f}")
print(f"Précision SVM (sur les données de test) : {acc_svm:.4f}")
print("----------------------------------------------------")
print("\nRapport de Classification sur les données de Test :\n")
print(classification_report(y_test_encoded, y_pred_svm))

afficher_matrice_confusion(y_test_encoded, y_pred_svm, encoder.classes_, "Matrice de Confusion : SVM")
