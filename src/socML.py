import pandas as pd
import numpy as np


socDB = pd.read_csv('../Data/SOC_Database.csv', sep=',')

# checking the data
print(socDB.columns)
print(socDB.shape)
print(socDB.isnull().sum().any())
print(socDB.duplicated().any())
print(socDB.dtypes == 'str')

# prepare data for ML modeling
x = socDB.drop(['SampleID','SOC (%)'], 1)
y = socDB['SOC (%)']

# splitting data for training and testing
X_train = socDB




