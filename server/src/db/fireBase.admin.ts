import admin from "firebase-admin";

const fireBase_Admin = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "chatgpt-2adfa",
    clientEmail:
      "firebase-adminsdk-7gy7p@chatgpt-2adfa.iam.gserviceaccount.com",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwshQg51RBkzzX\n++D2R9GUzNJk5QxouCJPeSQG4j0Ya+CS+tgUJGhEUXbewy4ogmDyXfnnEkQJz4+C\nZ0KlYP8hXIefXoQFPnLFcQuruw4E1xBBukTTq5xrq2swblY7PgConHFRYVpqNKmy\nwgLs2shTnDbvNlgd51LbZCxkJ+7seWEXm/mnS7R5czF+SiRFKcFBYFyhwZSpEtTl\nAMP+EK/3yT8ek2jMOAZzt0K7e2McdCWksJc7yS6WYLw45qgvNgsbNgksQCwFJtpF\nqbO3PV6kb7eVu+MQiqVARtxtwdEcAYh+fIiDC9jRlpzcQNFQbdQpAGskXdWJf/N6\n/rCYGldbAgMBAAECggEACdeZhG2uRUrQyE0Y7k74zxuLmqAhjVG4Y4nhZlrCwXH8\n2+MKFzEh97A7+VOQ5iPBB68RZPwg+xTrLv3WegTJoU+YpFls7Cfa18Ggv0uXj9B0\n8NxRyiKUf3DYcyWqOvmMqtev/jL4iNLvIuxook3be8DHVJLH3L6OYHcXe+q3hcdz\nJ/lmwMauIcpDi0ytxAuOWGqBokUJAa79wjWbylgsTsrgvyiFyDVm5EJWrFLorM28\nPYmkAhZcKvn5Kyhg0QkFYcGlwAmBDTJWkGwvmVH8rYCCW63hPiVlI9xIqdxtoVt8\nzOUh/K3IkboH1AMC4vNaqz1RtafOsUNvBFPI+PVUbQKBgQDzAm4uQv8qPQjIEKUJ\nR/wo+VZ4Y/BIdyNRVqu/fXYx01QD2aIyIFpYuN+EwM1qIKbK3qTsBaCrE7RwLd9W\nQq0vniYUOBJRpfzkmIWbvtwD/kGKjL1mhoRmtvt8qL4R2hE8Dr+r38wyWjiCjbHg\nd408ci/aw3hdIJM3joavGyr2xQKBgQC6JCWkzy2D20LxFdRv09DA/geS6M+zTVIM\nAoHmLPGveryVWGs0Tk2YS23juz5dbRlnlnj1h9Sxj38W+4b0InlUeU73QU0onqwH\nFa7xwBjXr+FBiL/eQoUVq0/BYHIO3f+3LbeuQvrWgLj751eVFpKRSnf/JX9OMC7P\nObpcQDf3nwKBgQDcdwsA23Vlm6PY5gjkR7OEdNk3NevrwnJ/O7NrceaGQ6SILa0R\n7vooXekjJkv2CZNon99d5akjLChaUbO6LZmzhrYjR8+O1Zl+xsUITHqNAOHzUcYP\nOuDp0v6L1QdDaOST6QmJY+t8jw+Pmf+TlsLC4RF7VjVfv8rv71VPjcVHxQKBgEKL\nS53YpvfdedgAKtrziUyFRCXj7uS1vqAmgVPNO3W1Vhe57VFcsObCCH4CYXA64Xsj\n0whLz+DOYOvRbdR3QpLNb0p7YN8lonBB8zHfr8Hj0Y6BGb6WX0d43+FM3lmsSY+t\n212D+nKWwArmEGxvDmS8j5t6R0GnfgR9Kb9zAc8XAoGAGBVmlbMuIuHpl8N+jOtt\ntu0gBVCGhg179reGwhUXvzaTncXy6yuN2SE9riRNzh3WZsWQmaAJDebqw8yPYuNa\ntYMTV4UaOfO0dm1lEgGWzbPWFzDq+cDTLrcI1fLMYja6mNbxNoiVRjQ0JLGfFF6V\nXV7IlDSdlqpMj+MUFl5JW70=\n-----END PRIVATE KEY-----\n",
  }),
  databaseURL: process.env.DATA_BASE_URL,
});

export default fireBase_Admin;
