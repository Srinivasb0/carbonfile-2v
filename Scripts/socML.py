import pandas as pd
import numpy as np
import sklearn


socDB = pd.read_csv('../Data/SOC_Database.csv', sep=',')

# prepare data for ML modeling
x = socDB.drop(['SampleID','SOC (%)'], 1)
y = socDB['SOC (%)']
print(x.shape, y.shape)

# splitting data for training and testing
X_train = x[:700]
y_train = y[:700]
X_test = x[700:]
y_test = y[700:]

print(X_train.shape, y_train.shape, X_test.shape, y_test.shape)