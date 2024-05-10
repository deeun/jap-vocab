type ResponseData = {
    message: string
}
let data
let isError = false

export async function ENG_KOR_TRANSLATE(req: any) {
    await fetch('http://localhost:3000/v1/translation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-NCP-APIGW-API-KEY-ID': process.env.NEXT_PUBLIC_PAPAGO_ID,
            'X-NCP-APIGW-API-KEY': process.env.NEXT_PUBLIC_PAPAGO,
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(req)
    }).then((res) => {
        if (res.status !== 200) {
            isError = true
        } else {
            isError = false
        }
    })

    if (!isError) {
        const returnData = await res.json();
        data = returnData?.message.result;
    } else {
        data = {error: true}
    }

    return data;
}
